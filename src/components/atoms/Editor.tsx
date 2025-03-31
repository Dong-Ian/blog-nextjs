"use client";

import { storage } from "@/Firebase";
import MDEditor, {
  commands,
  TextAreaTextApi,
  TextState,
} from "@uiw/react-md-editor";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

const Editor = () => {
  const { setValue, watch } = useFormContext();
  const contents = watch("contents");
  const editorRef = useRef<HTMLDivElement>(null);

  const handleChange = (value?: string) => {
    if (value !== undefined) {
      setValue("contents", value);
    }
  };

  const uploadImageAndInsert = async (file: File) => {
    const storageRef = ref(storage, `image/${Date.now()}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    const insert = `![image](${url})`;

    const newValue = (contents ?? "") + "\n" + insert;
    setValue("contents", newValue);
  };

  useEffect(() => {
    const handleDrop = async (e: DragEvent) => {
      e.preventDefault();
      if (!e.dataTransfer?.files?.length) return;

      const file = e.dataTransfer.files[0];
      if (!file.type.startsWith("image/")) return;

      await uploadImageAndInsert(file);
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const wrapper = editorRef.current;
    if (wrapper) {
      wrapper.addEventListener("drop", handleDrop);
      wrapper.addEventListener("dragover", handleDragOver);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("drop", handleDrop);
        wrapper.removeEventListener("dragover", handleDragOver);
      }
    };
  }, [contents, setValue]);

  const imageHandler = (
    api: TextAreaTextApi,
    value?: string,
    onChange?: (val: string) => void
  ) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      const storageRef = ref(storage, `image/${Date.now()}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      const insert = `![image](${url})`;

      api.replaceSelection(insert);

      if (onChange) {
        const newValue = (value ?? "") + "\n" + insert;
        onChange(newValue);
      }
    });
  };

  const customImageCommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: <i className="bi bi-image" />,
    execute: (state: TextState, api: TextAreaTextApi) => {
      imageHandler(api, contents, handleChange);
    },
  };

  return (
    <div ref={editorRef}>
      <MDEditor
        className="mt-[20px]"
        value={contents}
        onChange={handleChange}
        height={800}
        commands={[...commands.getCommands(), customImageCommand]}
      />
    </div>
  );
};

export default Editor;
