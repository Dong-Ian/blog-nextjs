export interface PostInterface {
  category?: string;
  tags?: string[];
  categoryName?: string;
  isPinned: "0" | "1";
  postContents: string;
  postSeq: string;
  postTitle: string;
  regDate: string;
  modDate: string;
  userName: string;
  viewed: string;
}

export interface PostParams {
  post: PostInterface;
}
