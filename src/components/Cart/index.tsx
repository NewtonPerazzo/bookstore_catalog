import { useEffect, useState } from "react"
import { getLocalStorage, removeLocalStorage } from "../../storage"
import { 
    Container, 
    HeaderContainer, 
    Title, 
    ClearCart, 
    BookContainer, 
    CartInfoContainer, 
    TotalText, 
    TotalContainer, 
    ButtonTotal, 
    MinimizeButton,
    BookInfo
} from "./style"
import { IBook } from "../../types"
import Modal from "../Modal"
import { rentABook } from "../../services/books"
import { useTranslation } from "react-i18next"

const Cart = () => {
    const [cartState, setCartState] = useState<IBook[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [heightMobileCart, setHeightMobileCart] = useState<string>('100%')
    const [widthMobileCart, setWidthMobileCart] = useState<string>('100%')
    const [showRentModal, setShowRentModal] = useState(false)
    const { t } = useTranslation();
    const isCartMobile = heightMobileCart === '40px'

    const Strings = {
        EMPTY_CART: t('emptyCart'),
        TOTAL: t('total'),
        FINISH: t('finish'),
        CLEAR: t('clear'),
        CART: t('cart'),
        COIN: t('coin'),
        YOU_ARE_RENTING: t('youAreRenting', { count: cartState.length }),
        YOU_ARE_RENTING_PLOORAL: t('youAreRentingPlooral', { count: cartState.length }),
    }

    const hasCart = cartState?.length > 0

    const handleCloseModal = () => setShowRentModal(false)
    const handleConfirmRent = async () => {
        setShowRentModal(false)
        removeLocalStorage('cart')
        await rentABook(cartState)
    }

    const handleClickOnMinimize = () => {
        setHeightMobileCart(heightMobileCart === '40px' ? '100%' : '40px')
        setWidthMobileCart(widthMobileCart === '40px' ? '100%' : '40px')
    }

    const getCartFromStorage = () => {
        const cart = JSON.parse(getLocalStorage('cart') || '[]')
        setCartState(cart)
    }

    useEffect(() => {
        const total = cartState.reduce((acc, book) => acc + (book.price || 0), 0)
        setTotalPrice(total)
    }, [cartState])

    useEffect(() => {
        getCartFromStorage()

        const handleStorageChange = () => {
            getCartFromStorage()
        }
        window.addEventListener("storage", handleStorageChange)

        const intervalId = setInterval(() => {
            getCartFromStorage()
        }, 1000)

        return () => {
            window.removeEventListener("storage", handleStorageChange)
            clearInterval(intervalId)
        }
    }, [])

    return (
        <Container height={heightMobileCart} width={widthMobileCart}>
            <div>
                <HeaderContainer isToMinimize={heightMobileCart === '40px'}>
                    <MinimizeButton onClick={handleClickOnMinimize}>
                        {isCartMobile ? '+' : '-'}
                    </MinimizeButton>
                    <Title onClick={handleClickOnMinimize} isToHide={isCartMobile}>{Strings.CART}</Title>
                    {hasCart && !(isCartMobile) ? <ClearCart onClick={() => removeLocalStorage('cart')}>{Strings.CLEAR}</ClearCart> : <div />}
                </HeaderContainer>

                {hasCart ? 
                    <CartInfoContainer isToHide={isCartMobile}>
                        {cartState.map((book: IBook) => (
                            <BookContainer key={book.id}>
                                <BookInfo>{book.name}</BookInfo>
                                <BookInfo>{Strings.COIN}{book.price.toFixed(2)}</BookInfo>
                            </BookContainer>
                        ))}

                        <TotalContainer>
                            <TotalText>{Strings.TOTAL}{totalPrice.toFixed(2)}</TotalText>
                            <ButtonTotal data-testid="finish-button" onClick={() => setShowRentModal(true)}>{Strings.FINISH}</ButtonTotal>
                        </TotalContainer>

                    </CartInfoContainer>
                    : <p>{Strings.EMPTY_CART}</p>
                }
            </div>

            <Modal
                isOpen={showRentModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRent}
                title={cartState.length > 1 ? Strings.YOU_ARE_RENTING_PLOORAL : Strings.YOU_ARE_RENTING}
                content={`${Strings.TOTAL} ${totalPrice.toFixed(2)}`}
            />
        </Container>
    )
}

export default Cart
