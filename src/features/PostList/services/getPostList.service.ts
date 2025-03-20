import {
  GetCategoryPostListFunctionProps,
  GetPostListFunctionProps,
  GetTagPostListFunctionProps,
} from "../types/PostList.type";
// 최신 게시물 목록을 가져오는 함수
async function getRecentPostList({ page, size }: GetPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/list?page=${page}&size=${size}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: process.env.NEXT_PUBLIC_BLOG_ID,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recent posts");
  }

  return response.json();
}

// 고정된 게시물 목록을 가져오는 함수
async function getPinnedPostList({ page, size }: GetPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/list/pinned?page=${page}&size=${size}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: process.env.NEXT_PUBLIC_BLOG_ID,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pinned posts");
  }

  return response.json();
}

// 카테고리별 게시물 목록을 가져오는 함수
async function getCategoryPostList({
  category,
  page,
  size,
}: GetCategoryPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/list/category?page=${page}&size=${size}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: process.env.NEXT_PUBLIC_BLOG_ID,
        category,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts in category: ${category}`);
  }

  return response.json();
}

// 태그별 게시물 목록을 가져오는 함수
async function getTagPostList({
  tag,
  page,
  size,
}: GetTagPostListFunctionProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/post/list/tag?page=${page}&size=${size}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: process.env.NEXT_PUBLIC_BLOG_ID,
        tag,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts with tag: ${tag}`);
  }

  return response.json();
}

export {
  getCategoryPostList,
  getPinnedPostList,
  getRecentPostList,
  getTagPostList,
};
