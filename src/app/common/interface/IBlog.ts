export default interface IBlog {
  index: number;
  title: string;
  content: string;
  image?: string;
  synopsis: string;
  author: string;
  createdOn: Date;
  modifiedOn?: Date;
  like?: number;
  dislikes?: number;
}
