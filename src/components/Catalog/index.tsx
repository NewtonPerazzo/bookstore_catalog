
import { useEffect, useState } from "react";
import { IBook, ICategory } from "../../types";
import Book from "../Book";
import { BooksContainer, BooksSlider, BorderCategory, BorderCategoryLast, CategoryContainer, CategoryDiv, CategoryStyle, Container, SeeMoreTitle, Title } from "./style"
import Modal from "../Modal";
import { getLocalStorage, setLocalStorage } from "../../storage";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation()

    const Strings = {
        SEE_MORE: t('seeMore'),
        SEE_LESS: t('seeLess'),
        BOOK_ALREADY_ADDED: t('bookAlreadyAdded'),
        CATALOG: t('catalog'),
        LOADING: t('loading'),
        DO_YOU_WANT_RENT: t('doYouWantToRent', { book: book.name }),
        CLICK_TO_CONFIRM: t('clickToConfirm', { book: book.name })
    }

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
                        <CategoryContainer>
                            <BorderCategory />
                            <BorderCategory color="#FFF" />
                            <BorderCategory color="#FFF" />
                            <BorderCategory />
                            <BorderCategory />
                            <BorderCategory />
                            <BorderCategoryLast />
                            <CategoryDiv>
                                <CategoryStyle>{category.name}</CategoryStyle>
                            </CategoryDiv>
                        </CategoryContainer>
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
        if(cart.find((bookCart: IBook) => bookCart.id === book?.id)){
            alert(Strings.BOOK_ALREADY_ADDED)
        } else{

            setLocalStorage("cart", JSON.stringify([...cart, book]));
        }
        handleCloseModal()
    }

    useEffect(() => {
        setCategoriesToUse(categories?.slice(0, LIMIT))
    }, [categories])

    return (
        <Container isToShowMore={isToShowMore}>
            <div style={{ width: '100%' }}>
                <Title>{Strings.CATALOG}</Title>
                {categories && books ? (
                    <>
                        {renderCategories()}
                        
                        {categories && categories.length > LIMIT && (
                            <SeeMoreTitle onClick={() => handleClickOnShowMore()}><p>{isToShowMore ? Strings.SEE_LESS : Strings.SEE_MORE}</p></SeeMoreTitle>
                        )}
                    </>
                ) : (
                    <div>{Strings.LOADING}</div>
                )}
                
            </div>

            <Modal
                isOpen={showRentModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRent}
                title={Strings.DO_YOU_WANT_RENT}
                content={Strings.CLICK_TO_CONFIRM}
            />
        </Container>
    )
}

export default Catalog