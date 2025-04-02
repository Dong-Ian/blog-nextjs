import getAccount from "@/features/Account/services/getAccount.service";
import AdminForm from "./AdminForm";

export default async function Admin() {
  const userInfo = await getAccount();

  return <AdminForm userInfo={userInfo} />;
}
