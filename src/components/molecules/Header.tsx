"use client";
import URL from "@/constants/URL";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 50) {
        setHidden(true); // 아래로 → 숨김
      } else {
        setHidden(false); // 위로 → 나타남
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 flex w-full items-center justify-between border-b-gray-300 bg-white px-10 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] transition-transform duration-100",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Link href={URL.HOME}>
        <Typography.Head1 className="text-[34px]">Archive</Typography.Head1>
      </Link>
      <div className="flex items-center justify-center gap-5">
        <Link href={"/posting"}>
          <i className="bi bi-person-circle align-middle text-[30px]"></i>
        </Link>
        <Link href={"/posting"}>
          <Button.Default className="h-[33px] rounded-full border-solid border-black bg-transparent hover:bg-black hover:text-white">
            Posting
          </Button.Default>
        </Link>
      </div>
    </header>
  );
};

export default Header;
