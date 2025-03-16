import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

const DefaultButtonClass =
  "box-border px-4 py-2 border rounded-md border-gray-200 transition-all duration-200 text-sm bg-white text-black flex items-center gap-2 h-[40px] w-fit min-w-fit justify-center";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
}

const DefaultButton: React.FC<ButtonProps> = ({
  className,
  children,
  active = false,
  ...props
}) => {
  return (
    <button
      className={cn(DefaultButtonClass, className)}
      data-active={active}
      {...props}
    >
      {children}
    </button>
  );
};

const Button = {
  Default: DefaultButton,
};

export default Button;
