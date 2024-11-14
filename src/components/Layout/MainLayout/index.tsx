import Header from "../../Header"
import { Container, ContainerColumns, ContainerSide } from "./styles"

interface MainLayoutProps {
    rightElement: React.ReactNode
    leftElement: React.ReactNode
}

const MainLayout = ({ rightElement, leftElement }: MainLayoutProps) => {

    return (
        <Container>
            <Header />
            <ContainerColumns>
                <ContainerSide isLeft>
                    {leftElement}
                </ContainerSide>
                <ContainerSide>
                    {rightElement}
                </ContainerSide>
            </ContainerColumns>
        </Container>
    )
}

export default MainLayout