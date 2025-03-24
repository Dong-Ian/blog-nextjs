"use client";
import { PostParams } from "../type/Post.type";

import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";

const PostContents = ({ post }: PostParams) => {
  return (
    <div className="py-[30px]">
      <MDEditor.Markdown
        source={post.postContents}
        className="w-full break-words"
        style={{
          lineHeight: "30px",
          position: "relative",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default PostContents;
