export interface PostInterface {
  postSeq: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
  authorName: string;
  tags: string[];
  archived: boolean;
  pinned: boolean;
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
