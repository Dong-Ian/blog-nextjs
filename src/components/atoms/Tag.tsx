import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const TagClass = {
  Default:
    "box-border flex items-center bg-white text-black border-[1px] rounded-md px-3 text-[0.75rem] h-[25px] w-fit min-w-fit",
  Main: "bg-mos-main-500 text-white border-mos-main-500",
};

const ButtonTypeClass = {
  Detail: "bg-mos-white-gray-100 rounded-[20px] text-mos-gray-300 text-black",
};

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: keyof typeof ButtonTypeClass;
  border?: boolean;
  bold?: boolean;
}

const TagComponent: React.FC<TagProps & { color: keyof typeof TagClass }> = ({
  className,
  border = true,
  children,
  color,
  type,
  bold = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        TagClass.Default,
        type && ButtonTypeClass[type],
        color !== "Default" && TagClass[color], // 동적 색상 적용
        !border && "border-none",
        bold && "font-bold", // Bold 적용
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// 태그 객체로 내보내기
const Tag = {
  Default: (props: TagProps) => <TagComponent {...props} color="Default" />,
  Main: (props: TagProps) => <TagComponent {...props} color="Main" />,
  Detail: (props: TagProps) => (
    <TagComponent {...props} type="Detail" color="Default" />
  ),
};

export default Tag;
