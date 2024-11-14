import { IBook } from "../../types"
import { Container, Title, Subtitle, Button, ContainerButton } from "./style"

interface BookProps {
    book: IBook
    handleClickRentButton: () => void
}

const Book = ({ book, handleClickRentButton }: BookProps) => {
    const { name, author, status, price } = book
    const disabled = status !== "available"

    const buttonTitle = {
        'rented': 'Alugado',
        'available': 'Alugar',
        'unavailable': 'Indisponível'
    }

    return (
        <Container>
            <Title>{name}</Title>
            <Subtitle>Autor(a): {author.name}</Subtitle>
            <Subtitle color="#007bff">R$ {price.toFixed(2)}</Subtitle>

            <ContainerButton>
                <Button disabled={disabled} onClick={handleClickRentButton} status={status}>{buttonTitle[status]}</Button>
            </ContainerButton>
        </Container>
    )
}

export default Book