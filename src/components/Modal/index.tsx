import React from 'react';
import { Button, ButtonContainer, ModalBody, ModalContainer, ModalHeader, Overlay } from './styles';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm?: () => void
    title?: string
    content?: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, content, onConfirm }: ModalProps) => {
  const { t } = useTranslation() 
  if (!isOpen) return null;

  const Strings = {
    CLOSE: t('close'),
    CONFIRM: t('confirm')
  }

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>

        <ButtonContainer>
          <Button onClick={onClose}>{Strings.CLOSE}</Button>
          {onConfirm && <Button onClick={onConfirm}>{Strings.CONFIRM}</Button>}
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};
  
export default Modal;