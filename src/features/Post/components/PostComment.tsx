"use client";

import { useEffect, useRef } from "react";
import { PostParams } from "../type/Post.type";

const PostComment = ({ post }: PostParams) => {
  const commentsEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!commentsEl.current) return;
      if (commentsEl.current.hasChildNodes()) return;

      const scriptEl = document.createElement("script");
      scriptEl.async = true;
      scriptEl.src = "https://utteranc.es/client.js";
      scriptEl.setAttribute("repo", process.env.NEXT_PUBLIC_GITHUB_REPO || "");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute("theme", "github-light");
      scriptEl.setAttribute("crossorigin", "anonymous");

      commentsEl.current.appendChild(scriptEl);
    }, 100);
    return () => clearTimeout(timeout);
  }, [post]);

  return (
    <div className="h-[350px]">
      <div ref={commentsEl} />
    </div>
  );
};

export default PostComment;
