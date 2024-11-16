import { useTranslation } from "react-i18next"
import { IBook } from "../../types"
import { Container, Title, Subtitle, Button, ContainerButton } from "./style"

interface BookProps {
    book: IBook
    handleClickRentButton: () => void
}

const Book = ({ book, handleClickRentButton }: BookProps) => {
    const { name, author, status, price } = book
    const disabled = status !== "available"
    const { t } = useTranslation();

    const Strings = {
        RENTED: t('rented'),
        AVAILABLE: t('available'),
        UNAVAILABLE: t('unavailable'),
        AUTHOR: t('author'),
        COIN: t('coin')
    }

    const buttonTitle = {
        'rented': Strings.RENTED,
        'available': Strings.AVAILABLE,
        'unavailable': Strings.UNAVAILABLE,
    }

    return (
        <Container>
            <Title>{name}</Title>
            <Subtitle>{Strings.AUTHOR} {author.name}</Subtitle>
            <Subtitle color="#007bff">{Strings.COIN} {price.toFixed(2)}</Subtitle>

            <ContainerButton>
                <Button data-testid={`book-button-${book.id}`} disabled={disabled} onClick={handleClickRentButton} status={status}>{buttonTitle[status]}</Button>
            </ContainerButton>
        </Container>
    )
}

export default Book