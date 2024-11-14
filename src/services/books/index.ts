import { BASE_URL, BOOKS_URI, RENT } from "..";
import { IBook } from "../../types";

export const getBooks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${BOOKS_URI}`)
        return response.json()
    }
    catch (error) {
        console.log(error)
    }
}

export const rentABook = async (books: IBook[]) => {
    try {
        const response = await fetch(`${BASE_URL}/${RENT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(books)
        })
        return response.json()
    }
    catch (error) {
        console.log(error)
    }
}