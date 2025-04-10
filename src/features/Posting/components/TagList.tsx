import Input from "@/components/atoms/Input";
import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface TagListProps {
  prevTagList?: string[];
}
const TagList = ({ prevTagList }: TagListProps) => {
  const [tagElement, setTagElement] = useState("");
  const [tagList, setTagList] = useState<string[]>(prevTagList || []);
  const [isComposing, setIsComposing] = useState(false);

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = () => setIsComposing(false);
  const { setValue } = useFormContext();

  const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTagElement(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return;

    if (
      (event.key === "Enter" || event.key === " ") &&
      tagElement.trim() !== ""
    ) {
      event.preventDefault();
      setTagList((prevTags) => [...prevTags, tagElement]);
      setTagElement("");
    }
  };

  const handleClearClick = (index: number) => {
    setTagList((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setValue("tags", tagList);
  }, [tagList, setValue]);

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
          placeholder="태그를 입력해주세요"
          value={tagElement}
          onChange={handleTag}
          onKeyDown={handleKeyPress}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          className="ml-[-15px] border-none outline-none placeholder:text-gray-400"
        />
        <div className="border-b" />
      </div>
      <TagRender />
    </div>
  );
};

export default TagList;
