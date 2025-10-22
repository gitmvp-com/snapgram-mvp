export type IPost = {
  id: string;
  caption: string;
  imageUrl: string;
  location?: string;
  tags?: string;
  creator: {
    name: string;
    imageUrl: string;
  };
  createdAt: string;
};

export type INewPost = {
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};
