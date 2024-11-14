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

const Cart = () => {
    const [cartState, setCartState] = useState<IBook[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [heightMobileCart, setHeightMobileCart] = useState<string>('100%')
    const [showRentModal, setShowRentModal] = useState(false)

    const hasCart = cartState?.length > 0

    const handleCloseModal = () => setShowRentModal(false)
    const handleConfirmRent = async () => {
        setShowRentModal(false)
        removeLocalStorage('cart')
        await rentABook(cartState)
    }

    const handleClickOnMinimize = () => setHeightMobileCart(heightMobileCart === '30px' ? '100%' : '30px')

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
        <Container height={heightMobileCart}>
            <div>
                <HeaderContainer>
                    <MinimizeButton onClick={handleClickOnMinimize}>
                        {heightMobileCart === '30px' ? '+' : '-'}
                    </MinimizeButton>
                    <Title onClick={handleClickOnMinimize}>Carrinho</Title>
                    {hasCart ? <ClearCart onClick={() => removeLocalStorage('cart')}>Limpar</ClearCart> : <div />}
                </HeaderContainer>

                {hasCart ? 
                    <CartInfoContainer>
                        {cartState.map((book: IBook) => (
                            <BookContainer key={book.id}>
                                <BookInfo>{book.name}</BookInfo>
                                <BookInfo>R${book.price.toFixed(2)}</BookInfo>
                            </BookContainer>
                        ))}

                        <TotalContainer>
                            <TotalText>Total: R${totalPrice.toFixed(2)}</TotalText>
                            <ButtonTotal onClick={() => setShowRentModal(true)}>Finaizar</ButtonTotal>
                        </TotalContainer>

                    </CartInfoContainer>
                    : <p>Carrinho vazio... </p>
                }
            </div>

            <Modal
                isOpen={showRentModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRent}
                title={`Você está alugando ${cartState.length} ${cartState.length > 1 ? 'livros' : 'livro'}`}
                content={`Total: ${totalPrice.toFixed(2)}`}
            />
        </Container>
    )
}

export default Cart
