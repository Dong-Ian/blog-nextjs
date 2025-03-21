export interface PostInterface {
  category?: string;
  categoryName?: string;
  isPinned: "0" | "1";
  modDate: string;
  postContents: string;
  postSeq: string;
  postTitle: string;
  regDate: string;
  userName: string;
  viewed: string;
}

export interface GetPostListFunctionProps {
  page: number;
  size: number;
}

export interface GetCategoryPostListFunctionProps
  extends GetPostListFunctionProps {
  category: string;
}

export interface GetTagPostListFunctionProps extends GetPostListFunctionProps {
  tag: string;
}
