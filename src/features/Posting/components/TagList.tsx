import Input from "@/components/atoms/Input";
import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import React, { useState } from "react";

interface TagListFieldProps {
  tagList: string[];
  setTagList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagList: React.FC<TagListFieldProps> = ({ tagList, setTagList }) => {
  const [tagElement, setTagElement] = useState("");

  const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTagElement(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      tagElement.trim() !== ""
    ) {
      setTagList((prevTags) => [...prevTags, tagElement]);
      setTagElement(""); // 입력 필드 비우기
    }
  };

  const handleClearClick = (index: number) => {
    setTagList((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const TagRender: React.FC = () => {
    if (tagList.length === 0) {
      return <div className="h-[33px] w-full" />;
    }

    return (
      <div className="flex w-full flex-wrap gap-1 py-1">
        {tagList.map((tag, index) => {
          return (
            <Tag.Default key={index}>
              <Typography.P3>{tag}</Typography.P3>
              <button
                className="ml-3 border-none outline-none "
                onClick={() => handleClearClick(index)}
              >
                <i className="bi bi-x mr-[-8px] text-md" />
              </button>
            </Tag.Default>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex w-full flex-wrap items-center">
      <div className="w-[200px]">
        <Input
          name="tag"
          placeholder="태그를 입력해주세요"
          value={tagElement}
          onChange={handleTag}
          onKeyPress={handleKeyPress}
          className="ml-[-15px] border-none outline-none placeholder:text-gray-400"
        />
        <div className="border-b" />
      </div>
      <TagRender />
    </div>
  );
};

export default TagList;
