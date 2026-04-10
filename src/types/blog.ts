export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
