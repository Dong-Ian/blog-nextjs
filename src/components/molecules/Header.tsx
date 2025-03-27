import URL from "@/constants/URL";
import Link from "next/link";
import Typography from "../atoms/Typography";

const Header = () => {
  return (
    <div className="fixed top-0 z-40 flex w-full items-center justify-between bg-slate-900 px-10">
      <Link href={"/posting"}>
        <i className="bi bi-person-circle align-middle text-[30px] text-white"></i>{" "}
      </Link>
      <Link href={URL.HOME}>
        <Typography.Head1 className="text-white">Archive</Typography.Head1>
      </Link>
      <Link href={"/posting"}>
        <i className="bi bi-vector-pen align-middle text-[30px] text-white"></i>{" "}
      </Link>
    </div>
  );
};

export default Header;
