import URL from "@/constants/URL";
import Link from "next/link";
import Typography from "../atoms/Typography";

const Header = () => {
  return (
    <div className="fixed top-0 z-40 flex w-full justify-center bg-slate-900">
      <Link href={URL.HOME}>
        <Typography.Head1 className="text-white">Archive</Typography.Head1>
      </Link>
    </div>
  );
};

export default Header;
