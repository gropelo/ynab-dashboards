export interface ICategoriesResponse {
  data: {
    'category_groups': ICategoryGroup[];
  }
}

export interface ICategoryGroup {
  name: string;
  hidden: boolean;
  deleted: boolean;
  categories: ICategory[];
}

export interface ICategory {
  id: string;
  name: string;
  hidden: boolean;
  deleted: boolean;
}