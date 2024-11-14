import { ICategory } from '../types'
import mok from './categories.json'

const categoriesJson = JSON.stringify(mok)
export const categories: ICategory[] = JSON.parse(categoriesJson)