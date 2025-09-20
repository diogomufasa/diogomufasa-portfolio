type Link = string;

export interface CardType {
  title: string;
  tags: string;
  image: string;
  link: Link;
  github: Link;
  id: number;
  description?: string;
}
