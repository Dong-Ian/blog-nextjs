import { useEffect, useState } from "react";

interface ToCProps {
  title: string;
}

type TOCItem = {
  text: string;
  href: string;
  level: number;
};

const TableOfContents = ({ title }: ToCProps) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll("a.anchor"));

    const extracted = anchors.map((a) => {
      const href = a.getAttribute("href") || "";
      const heading = a.parentElement;
      const level =
        heading?.tagName === "H1" || heading?.tagName === "H2"
          ? Number(heading.tagName[1])
          : 0;
      const text = heading?.textContent?.trim() || "";

      return { href, text, level };
    });

    setTocItems(extracted);
  }, []);

  if (tocItems.length >= 1) {
    return (
      <div className="flex w-[380px] flex-col gap-2 border-l-2 px-7">
        <p className="text-[20px] font-bold">{title}</p>
        <ul className="space-y-1 text-sm">
          {tocItems.map((item: TOCItem, idx: number) => (
            <li
              key={idx}
              style={{
                marginLeft: item.level === 1 ? "0px" : "13px",
              }}
              className={`ml-${(item.level - 1) * 4} list-none`}
            >
              <a
                href={`${item.href}`}
                className="text-[16px] leading-7 text-gray-500 transition-all hover:text-sky-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default TableOfContents;
