export type GetPostsRequest = {
  userId: number
  id: number
  title: string
  body: string
}[]

export type TypesComments = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}[]
export type TypesComment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

