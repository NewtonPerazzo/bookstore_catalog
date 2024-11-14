import { IBook } from '../types'
import mok from './books.json'

const booksJson = JSON.stringify(mok)
export const books: IBook[] = JSON.parse(booksJson)