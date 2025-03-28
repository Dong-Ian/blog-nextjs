import { useRouter } from "next/navigation";
import Typography from "../atoms/Typography";

interface BackButtonProps {
  onBack?: () => void;
}

const Base = ({ onBack }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2 pb-[30px] transition-all hover:text-gray-500"
      onClick={handleBack}
    >
      <i className="bi bi-arrow-left text-[20px]" />
      <Typography.P3 className="text-[16px]">뒤로가기</Typography.P3>
    </div>
  );
};

const BackButton = {
  Back: () => <Base />,
  Custom: ({ onBack }: { onBack: () => void }) => <Base onBack={onBack} />,
};

export default BackButton;
