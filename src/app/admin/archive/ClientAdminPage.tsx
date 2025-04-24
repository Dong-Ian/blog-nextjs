"use client";
import Typography from "@/components/atoms/Typography";
import Pagination from "@/components/molecules/Pagination";
import SideBar from "@/features/Admin/components/SideBar";
import ArchivedPostItem from "@/features/PostList/components/ArchivedPostItem";
import { getArchivedPostList } from "@/features/PostList/services/getPostList.service";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export interface AdminFormInput {
  name: string;
  intro: string;
  instagramId: string;
  githubId: string;
  personalUrl: string;
  profileImage: string;
}
interface ClientAdminPageProps {
  currentPage: number;
}

const ClientAdminPage = ({ currentPage }: ClientAdminPageProps) => {
  const router = useRouter();
  // const [menu, setMenu] = useState<number>(1);
  const [archivedPost, setArchivedPost] = useState<PostInterface[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getArchivedPosts = async () => {
    const result = await getArchivedPostList({ page: currentPage, size: 2 });
    setArchivedPost(result.posts);
    setTotalCount(result.totalCount);
  };

  useEffect(() => {
    getArchivedPosts();
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/admin/archive?page=${selected + 1}`);
  };

  return (
    <div className="flex h-screen w-full justify-center  md:pl-[230px]">
      <SideBar />

      <div className="mt-[100px] flex w-full max-w-[1000px] flex-col items-center">
        <Typography.SubTitle1 className="mb-6 text-md font-semibold">
          보관글 조회
        </Typography.SubTitle1>
        {archivedPost.length ? (
          <div>
            <div className="w-[90%] max-w-[800px]">
              {archivedPost.map((post, index) => (
                <ArchivedPostItem key={index} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              postCount={totalCount}
              perPage={2}
              onPageChange={handlePageChange}
            />
          </div>
        ) : (
          <Typography.P2 className="text-gray-500">
            보관된 글이 없습니다.
          </Typography.P2>
        )}
      </div>
    </div>
  );
};

export default ClientAdminPage;
