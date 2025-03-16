import URL from "@/constants/URL";
import Link from "next/link";
import Typography from "../atoms/Typography";

const Header = () => {
  return (
    <div className="flex justify-center bg-slate-900">
      <Link href={URL.HOME}>
        <Typography.Head1 className="text-white">Archive</Typography.Head1>
      </Link>
    </div>
  );
};

export default Header;
