export type itemType = {
  body: string;
  id: number;
  title: string;
  userId: string;
};

export type resType = {
  nextId: number;
  previousId: number;
  data: itemType[];
};
