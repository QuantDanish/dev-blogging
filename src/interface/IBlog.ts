export default interface IBlog {
  index: number,
  title: string,
  content: string,
  image?: string| any,
  author: string,
  createdOn: Date,
  modifiedOn?: Date,
  like?: number
  dislikes?: number
}