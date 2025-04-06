import {
  GetCategoryPostListFunctionProps,
  GetPostListFunctionProps,
  GetTagPostListFunctionProps,
} from "../types/PostList.type";
// 최신 게시물 목록을 가져오는 함수
async function getRecentPostList({ page, size }: GetPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEST}/post/list?page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recent posts");
  }

  const res = await response.json();
  return res;
}

// 고정된 게시물 목록을 가져오는 함수
async function getPinnedPostList({ page, size }: GetPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEST}/post/list?pinned=1&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pinned posts");
  }
  const res = await response.json();
  return res;
}

// 카테고리별 게시물 목록을 가져오는 함수
async function getCategoryPostList({
  category,
  page,
  size,
}: GetCategoryPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEST}/post/list?category=${category}&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts in category: ${category}`);
  }

  const res = await response.json();

  return res;
}

// 태그별 게시물 목록을 가져오는 함수
async function getTagPostList({
  tag,
  page,
  size,
}: GetTagPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEST}/post/list?tag=${tag}&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        BlogId: process.env.NEXT_PUBLIC_BLOG_ID!,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts with tag: ${tag}`);
  }

  const res = await response.json();

  return res;
}

export {
  getCategoryPostList,
  getPinnedPostList,
  getRecentPostList,
  getTagPostList,
};
