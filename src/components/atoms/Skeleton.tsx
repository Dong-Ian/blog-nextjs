import { cn } from "@/lib/utils";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: string;
}

const Skeleton = ({
  width = "100%",
  height = 16,
  className = "",
  rounded = "rounded-md",
}: SkeletonProps) => {
  const computedWidth = typeof width === "number" ? `${width}px` : width;
  const computedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      role="status"
      className={cn(
        "animate-pulse bg-gray-200 dark:bg-gray-700 ",
        rounded,
        className
      )}
      style={{
        width: computedWidth,
        height: computedHeight,
      }}
    />
  );
};

export default Skeleton;
