import { IAuthor } from "./author"
import { ICategory } from "./category"
import { IStatus } from "./status"

export type IBook = {
    id: number
    name: string
    category: ICategory
    status: IStatus
    author: IAuthor
    price: number
    image: string
}