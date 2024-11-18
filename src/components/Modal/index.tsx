import { Button, ButtonContainer, ModalBody, ModalContainer, ModalHeader, Overlay } from './styles';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    content?: JSX.Element | string;
}

const Modal = ({ isOpen, onClose, title, content, onConfirm }: ModalProps) => {
    const { t } = useTranslation();
    if (!isOpen) return null;

    const Strings = {
        CLOSE: t('close'),
        CONFIRM: t('confirm')
    };

    return (
        <>
            <Overlay isOpen={isOpen} onClick={onClose} />
            <ModalContainer role="dialog" aria-labelledby="modal-header" isOpen={isOpen}>
                <ModalHeader id="modal-header">{title}</ModalHeader>
                <ModalBody>{content}</ModalBody>

                <ButtonContainer>
                    <Button onClick={onClose}>{Strings.CLOSE}</Button>
                    {onConfirm && <Button data-testid="modal-button" onClick={onConfirm}>{Strings.CONFIRM}</Button>}
                </ButtonContainer>
            </ModalContainer>
        </>
    );
};

export default Modal;
