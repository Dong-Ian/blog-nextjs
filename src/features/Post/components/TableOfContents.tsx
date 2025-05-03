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

      const level = Number(heading?.tagName[1]);
      const text = heading?.textContent?.trim() || "";

      return { href, text, level };
    });

    setTocItems(extracted);
  }, []);

  if (tocItems.length >= 1) {
    return (
      <div className="flex w-[380px] flex-col gap-2 border-l-2 px-7">
        <p className="text-md font-bold">{title}</p>
        <ul className="space-y-1 text-sm">
          {tocItems.map(
            (item: TOCItem, idx: number) =>
              item.level <= 3 && (
                <li
                  key={idx}
                  style={{
                    marginLeft: (item.level - 1) * 10,
                  }}
                  className={`ml-${(item.level - 1) * 4} list-none`}
                >
                  <a
                    href={`${item.href}`}
                    className="text-[15px] leading-6 text-gray-500 transition-all hover:text-sky-300"
                  >
                    {item.text}
                  </a>
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
};

export default TableOfContents;
