import Typography from "@/components/atoms/Typography";
import ImageForm from "@/features/Admin/form/ImageForm";
import InfoForm from "@/features/Admin/form/InfoForm";

export default async function Admin() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Typography.SubTitle1 className="mb-6 text-md font-semibold">
        회원 정보 변경
      </Typography.SubTitle1>

      <ImageForm />
      <InfoForm />
    </div>
  );
}
