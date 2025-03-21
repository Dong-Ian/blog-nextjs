"use client";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";

const EditorMarkdown = ({ content }: { content: string }) => {
  return (
    <div>
      <MDEditor.Markdown
        source={content}
        style={{
          width: "700px",
          lineHeight: "30px",
          position: "relative",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default EditorMarkdown;
