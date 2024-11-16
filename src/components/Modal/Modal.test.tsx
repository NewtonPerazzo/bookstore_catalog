import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '.';


jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, 
  }),
}));

describe('Modal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  test('should render modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} title="Modal Title" content="Modal Content" />);

    const modalContainer = screen.getByRole('dialog');
    expect(modalContainer).toHaveStyle('display: block');

    
    const title = screen.getByText('Modal Title');
    expect(title).toBeDefined();

    const content = screen.getByText('Modal Content');
    expect(content).toBeDefined();

    
    const closeButton = screen.getByText('close');
    expect(closeButton).toBeDefined();

    const confirmButton = screen.getByTestId('modal-button');
    expect(confirmButton).toBeDefined();
  });

  test('should not render modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={mockOnClose} onConfirm={mockOnConfirm} title="Modal Title" content="Modal Content" />);

    const modalContainer = screen.queryByRole('dialog');
    expect(modalContainer).toBeNull(); 
  });

  test('should call onClose when close button is clicked', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} title="Modal Title" content="Modal Content" />);

    
    const closeButton = screen.getByText('close');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('should call onConfirm when confirm button is clicked', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} onConfirm={mockOnConfirm} title="Modal Title" content="Modal Content" />);

    const confirmButton = screen.getByTestId('modal-button');
    fireEvent.click(confirmButton);

    
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  test('should not render confirm button when onConfirm is not provided', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} title="Modal Title" content="Modal Content" />);

    const confirmButton = screen.queryByTestId('modal-button');
    expect(confirmButton).toBeNull(); 
  });
});
