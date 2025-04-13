import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { marked } from "marked";

// 최신 타입 시그니처에 맞춘 커스텀 렌더러
const renderer = new marked.Renderer();

renderer.code = ({ text, lang }) => {
  const validLang = hljs.getLanguage(lang || "") ? lang : "plaintext";
  const highlighted = hljs.highlight(text, {
    language: validLang || "plaintext",
  }).value;

  return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
});

export { marked };
