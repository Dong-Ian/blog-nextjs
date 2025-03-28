"use client";

import { storage } from "@/Firebase";
import MDEditor, {
  commands,
  TextAreaTextApi,
  TextState,
} from "@uiw/react-md-editor";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const Editor = () => {
  const [contents, setContents] = useState<string>("");

  const handleChange = (value?: string) => {
    if (value !== undefined) {
      setContents(value);
    }
  };

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
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        const insert = `![image](${url})`;

        api.replaceSelection(insert);

        if (onChange) {
          const updated = `${value || ""}\n${insert}`;
          onChange(updated);
        }
      } catch (error) {
        alert(`${error} 이미지 업로드 실패`);
      }
    });
  };

  const customImageCommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: <i className="bi bi-image" />,
    execute: (state: TextState, api: TextAreaTextApi) => {
      imageHandler(api, contents, setContents);
    },
  };

  return (
    <MDEditor
      className="mt-[30px]"
      value={contents}
      onChange={handleChange}
      height={550}
      commands={[...commands.getCommands(), customImageCommand]}
    />
  );
};

export default Editor;
