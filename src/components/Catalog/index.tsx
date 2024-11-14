
import { useState } from "react";
import { IBook, ICategory } from "../../types";
import Book from "../Book";
import { BooksContainer, BooksSlider, Container, SeeMoreTitle, Title } from "./style"
import { rentABook } from "../../services/books";
import Modal from "../Modal";
import { getLocalStorage, setLocalStorage } from "../../storage";

interface CatalogProps { 
    categories?: ICategory[];
    books?: IBook[];
}

const Catalog = ({ categories, books }: CatalogProps) => {
    const LIMIT = 3
    const [categoriesToUse, setCategoriesToUse] = useState(categories?.slice(0, LIMIT))
    const [showRentModal, setShowRentModal] = useState(false)
    const [isToShowMore, setIsToShowMore] = useState(false)
    const [book, setBook] = useState({} as IBook)
    const cart = JSON.parse(getLocalStorage('cart') || '[]')

    const handleClickOnShowMore = () => {
        if(isToShowMore) {
            setCategoriesToUse(categories?.slice(0,LIMIT))
        } else {
            setCategoriesToUse(categories)
        }
        setIsToShowMore(!isToShowMore)
    }

    const getBooksByCategory = (category: ICategory) => books?.filter((book: IBook) => book?.category.id === category.id) 

    const onClickBookButton = (book: IBook) => {
        setBook(book)
        handleClickRentButton()
    }

    const renderCategories = () => {
        return(
            categoriesToUse?.map((category: ICategory) => {
                return (
                    <BooksContainer key={category.id}>
                        <p>{category.name}</p>
                        <BooksSlider>
                            {getBooksByCategory(category)?.map((book: IBook) => {
                                return (
                                    <Book key={book.id} book={book} handleClickRentButton={() => onClickBookButton(book)} />
                                )
                            })}
                        </BooksSlider>
                    </BooksContainer>
                )
            })
        )
    }

    const handleClickRentButton = () => setShowRentModal(true)

    const handleCloseModal = () => setShowRentModal(false)

    const handleConfirmRent = async () => {
        try {
            await rentABook(book?.id)
        }
        catch (error) {
            console.log(error)
        }
        if(cart.find((bookCart: IBook) => bookCart.id === book?.id)){
            alert('Livro já adicionado.')
        } else{

            setLocalStorage("cart", JSON.stringify([...cart, book]));
        }
        handleCloseModal()
    }

    return (
        <Container isToShowMore={isToShowMore}>
            <div style={{ width: '100%' }}>
                <Title>Catálogo</Title>
                {categories && books ? (
                    <>
                        {renderCategories()}
                        
                        {categories && categories.length > LIMIT && (
                            <SeeMoreTitle onClick={() => handleClickOnShowMore()}><p>Ver {isToShowMore ? 'menos' : 'mais'}</p></SeeMoreTitle>
                        )}
                    </>
                ) : (
                    <div>Carregando...</div>
                )}
                
            </div>

            <Modal
                isOpen={showRentModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRent}
                title={`Deseja alugar ${book?.name}?`}
                content={`Clique em confirmar para adicionar o livro ${book?.name} ao carrinho.`}
            />
        </Container>
    )
}

export default Catalog