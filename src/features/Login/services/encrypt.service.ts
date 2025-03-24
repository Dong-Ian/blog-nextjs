import CryptoJS from "crypto-js";

interface EncryptFunctionProps {
  data: string;
}

export default function encrypt({ data }: EncryptFunctionProps) {
  const key = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_KEY!); // AES값 할당
  const iv = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_IV!); // IV값 할당

  const encrypt = CryptoJS.AES.encrypt(data, key, { iv: iv });

  return encrypt.toString();
}
