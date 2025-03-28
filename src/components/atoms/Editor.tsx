"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const Editor = () => {
  const [contents, setContents] = useState<string>("");

  const handleChange = (value?: string) => {
    if (value !== undefined) {
      setContents(value);
    }
  };

  return (
    <MDEditor
      className="mt-[30px]"
      value={contents}
      onChange={handleChange}
      height={550}
    />
  );
};

export default Editor;
