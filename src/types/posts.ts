export interface PostJson {
  title: string;
  abstract: string;
  type: "post";
  link: string;
  additionalLinks: string[];
  portal: {
    link: string;
    name: string;
  };
  tags: string[];
  language: string;
  date: string;
}
