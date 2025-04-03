import getAccount from "@/features/Account/services/getAccount.service";
import AdminForm from "../../features/Admin/form/AdminForm";

export default async function Admin() {
  const userInfo = await getAccount();

  return (
    <div className="flex flex-col gap-5">
      <AdminForm userInfo={userInfo} />
    </div>
  );
}
