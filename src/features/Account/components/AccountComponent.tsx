"use client";
import { useFetchUser } from "../hooks/useFetchUser";

const AccountComponent = () => {
  const { userInfo } = useFetchUser();
  console.log(userInfo);

  return <div></div>;
};

export default AccountComponent;
