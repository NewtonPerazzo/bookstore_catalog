import { render, screen, fireEvent } from '@testing-library/react';
import Book from '../Book';
import { IBook, IStatus } from "../../types";
import '@testing-library/jest-dom';

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('Book Component', () => {
  const mockHandleClickRentButton = jest.fn();

  const book: IBook = {
    id: 1,
    category: { id: 1, name: "Fantasy" },
    name: 'O Hobbit',
    author: { id: 1, name: 'João' },
    status: 'available' as IStatus,
    price: 19.99,
    image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip"
  };

  test('should render book details correctly', () => {
    render(<Book book={book} handleClickRentButton={mockHandleClickRentButton} />);
    
    expect(screen.getByText('O Hobbit')).toBeInTheDocument();
    expect(screen.getByText('author João')).toBeInTheDocument();
    expect(screen.getByText('coin 19.99')).toBeInTheDocument();
  });

  test('button should be enabled when book is available', () => {
    render(<Book book={book} handleClickRentButton={mockHandleClickRentButton} />);
    
    const button = screen.getByTestId(`book-button-${book.id}`);
    expect(button).not.toBeDisabled();
  });

  test('button should be disabled when book is rented', () => {
    const rentedBook = { ...book, status: 'rented' as IStatus };
    render(<Book book={rentedBook} handleClickRentButton={mockHandleClickRentButton} />);
    
    const button = screen.getByTestId(`book-button-${rentedBook.id}`);
    expect(button).toBeDisabled();
  });

  test('should call handleClickRentButton when the button is clicked', () => {
    render(<Book book={book} handleClickRentButton={mockHandleClickRentButton} />);
    
    const button = screen.getByTestId(`book-button-${book.id}`);
    fireEvent.click(button);
    
    expect(mockHandleClickRentButton).toHaveBeenCalledTimes(1);
  });
});
