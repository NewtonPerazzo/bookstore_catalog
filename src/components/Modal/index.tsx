import React from 'react';
import { Button, ButtonContainer, ModalBody, ModalContainer, ModalHeader, Overlay } from './styles';

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm?: () => void
    title?: string
    content?: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, content, onConfirm }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>

        <ButtonContainer>
          <Button onClick={onClose}>Close</Button>
          {onConfirm && <Button onClick={onConfirm}>Confirmar</Button>}
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};
  
export default Modal;