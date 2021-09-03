export interface IRequestAddNote {
  text: string;
  categoryId: number;
}

export interface IResponseNote {
  id: number;
  text: string;
  categoryId: number;
  createdAt: string;
}

export interface IResponseCategory {
  id: number;
  category: string;
  categoryAmount: number;
}
