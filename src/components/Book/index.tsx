import { useTranslation } from "react-i18next"
import { IBook } from "../../types"
import { Container, Title, Subtitle, Button, ContainerInfo, ContainerBook, ContainerText, ContainerPrice } from "./style"
import PlusIcon from "../../icons/PlusIcon"
import Tooltip from "../Tooltip"

interface BookProps {
    book: IBook
    handleClickRentButton: () => void
}

const Book = ({ book, handleClickRentButton }: BookProps) => {
    const { name, author, status, price, image } = book
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
        <ContainerBook>
            <ContainerText>
                <Title>{name}</Title>
                <Subtitle>- {author.name}</Subtitle>
            </ContainerText>
        
            <Container url={image}>
                <ContainerInfo>
                    <Tooltip text={`${name} - ${author.name}`}>
                        <Button 
                            data-testid={`book-button-${book.id}`} 
                            disabled={disabled} 
                            onClick={handleClickRentButton} 
                            status={status}
                        >
                            {status === "available" ? <PlusIcon size="18px" color="#FFF"/> : buttonTitle[status]}
                        </Button>
                    </Tooltip>
                </ContainerInfo>
                {status === "available" && (
                    <ContainerInfo justify="flex-start">
                        <ContainerPrice>
                            <Subtitle size={18} color="#FFF">{Strings.COIN} {price.toFixed(2)}</Subtitle>
                        </ContainerPrice>
                    </ContainerInfo>
                )}
            </Container>
        </ContainerBook>
    )
}

export default Book