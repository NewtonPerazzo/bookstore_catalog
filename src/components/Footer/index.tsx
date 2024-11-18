import { useTranslation } from "react-i18next"
import { Container } from "./style"

const Footer = () => {
    const { t } = useTranslation()

    const Strings = {
        DEVELOPED_BY: t("developedBy")
    }

    return (
        <Container>
            <p>{Strings.DEVELOPED_BY} - 2024</p>

            <div>
                <a href="https://www.linkedin.com/in/newton-perazzo/" target="_blank"><p>LinkedIn </p></a>
                <a href="https://github.com/NewtonPerazzo" target="_blank"><p>GitHub</p></a>
            </div>
        </Container>
    )
}

export default Footer