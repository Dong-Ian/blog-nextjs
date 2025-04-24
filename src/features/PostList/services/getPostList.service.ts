import {
  GetCategoryPostListFunctionProps,
  GetPostListFunctionProps,
  GetTagPostListFunctionProps,
} from "../types/PostList.type";
// 최신 게시물 목록을 가져오는 함수
async function getRecentPostList({ page, size }: GetPostListFunctionProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recent posts");
    }

    const res = await response.json();

    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

// 고정된 게시물 목록을 가져오는 함수
async function getPinnedPostList({ page, size }: GetPostListFunctionProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/pinned?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pinned posts");
    }
    const res = await response.json();
    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

// 카테고리별 게시물 목록을 가져오는 함수
async function getCategoryPostList({
  category,
  page,
  size,
}: GetCategoryPostListFunctionProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post?category=${category}&page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts in category: ${category}`);
    }

    const res = await response.json();
    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

// 태그별 게시물 목록을 가져오는 함수
async function getTagPostList({
  tag,
  page,
  size,
}: GetTagPostListFunctionProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post?tag=${tag}&page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts with tag: ${tag}`);
    }

    const res = await response.json();
    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

// 인기 게시글을 가져오는 함수
async function getPopularPostList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/popular`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          blogId: process.env.NEXT_PUBLIC_BLOG_ID!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch popular posts`);
    }

    const res = await response.json();
    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

// 보관된 게시글을 가져오는 함수
async function getArchivedPostList({ page, size }: GetPostListFunctionProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/post/archived?page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch archived posts`);
    }

    const res = await response.json();
    console.log("archivedpost:", res.data);
    return res.data;
  } catch (e) {
    console.error("getPostList", e);
  }
}

export {
  getArchivedPostList,
  getCategoryPostList,
  getPinnedPostList,
  getPopularPostList,
  getRecentPostList,
  getTagPostList,
};
