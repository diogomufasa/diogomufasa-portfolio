type Link = {
  siteLink: string;
  github: string;
};

export interface CardType {
  title: string;
  description: string;
  image: string;
  link: Link['siteLink'];
  github: Link['github'];
  id: number;
}
