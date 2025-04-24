"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword === "") return;

    router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="w-[320px] rounded-md border">
        <input
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
          className="ml-3 w-[270px] rounded-md border border-none border-gray-200 bg-white px-5 py-2 text-md outline-none placeholder:text-gray-500"
        />
        <button type="submit">
          <i className="bi bi-search mr-3" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
