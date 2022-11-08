/* Defines the post entity */
export interface Post {
  id: number | null;
  titre: string;
  author: string;
  description: string;
  tags?: string[];
  date: string;
}

