import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypoType = "Head1" | "Head2" | "Head3" | "SubTitle1" | "P1" | "P2" | "P3";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const typoTypeMap: Record<TypoType, string> = {
  Head1: "text-6xl font-extrabold",
  Head2: "text-4xl font-bold",
  Head3: "text-3xl font-semibold",
  SubTitle1: "text-2xl font-medium",
  P1: "text-lg",
  P2: "text-base",
  P3: "text-sm",
};

const BaseTypography = ({
  type,
  children,
  className,
}: TypographyProps & { type: TypoType }) => {
  const style = typoTypeMap[type];
  return <p className={cn(style, className)}>{children}</p>;
};

const Typography = {
  Head1: (props: TypographyProps) => <BaseTypography type="Head1" {...props} />,
  Head2: (props: TypographyProps) => <BaseTypography type="Head2" {...props} />,
  Head3: (props: TypographyProps) => <BaseTypography type="Head3" {...props} />,
  SubTitle1: (props: TypographyProps) => (
    <BaseTypography type="SubTitle1" {...props} />
  ),
  P1: (props: TypographyProps) => <BaseTypography type="P1" {...props} />,
  P2: (props: TypographyProps) => <BaseTypography type="P2" {...props} />,
  P3: (props: TypographyProps) => <BaseTypography type="P3" {...props} />,
};

export default Typography;
