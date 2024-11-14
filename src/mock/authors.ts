import { IAuthor } from '../types'
import mok from './authors.json'

const authorJson = JSON.stringify(mok)
export const authors: IAuthor[] = JSON.parse(authorJson)