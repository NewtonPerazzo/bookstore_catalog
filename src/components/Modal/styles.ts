import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

const Overlay = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Controla a exibição do overlay */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;

const ModalContainer = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Controla a exibição do modal */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translate(-50%, -50%) scale(${({ isOpen }) => (isOpen ? 1 : 0.8)});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const ModalHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

const ModalBody = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #000;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: flex-end;
`;

export { Overlay, ModalContainer, ModalHeader, ModalBody, Button, ButtonContainer };
