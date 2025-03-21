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
