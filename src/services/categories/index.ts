import { BASE_URL, CATEGORIES_URI } from "..";
import { categories } from "../../mock/categories";

export const getCategories = async () => {
    try{    
        const response = await fetch(`${BASE_URL}/${CATEGORIES_URI}`)
        return response.json()
    }
    catch (error) {
        console.log(error)
        return categories
    }
}