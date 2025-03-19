import Typography from "@/components/atoms/Typography";
import Link from "next/link";

const PersonalUrl = ({ url }: { url: string }) => {
   
  const isUrlWithProtocol = (url: string) => {
    const pattern = /^(https?:\/\/)/i;
    return pattern.test(url);
  };

  const getDomainFromUrl = (url: string) => {
     
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = url.match(domainRegex);
    if (match) {
      return match[1];
    }
    return url;
  };

  return (
    <div>
      {url ? (
        !isUrlWithProtocol(url) ? (
          <div>
            <Link
              href={`https://${url}`}
              className="transition-all hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography.P3> {getDomainFromUrl(url)}</Typography.P3>
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href={url}
              className="transition-all hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography.P3> {getDomainFromUrl(url)}</Typography.P3>
            </Link>
          </div>
        )
      ) : (
        <p>등록된 링크가 없습니다</p>
      )}
    </div>
  );
};

export default PersonalUrl;
