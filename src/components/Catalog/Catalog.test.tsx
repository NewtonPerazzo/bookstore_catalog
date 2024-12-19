import { render, screen, fireEvent } from "@testing-library/react";
import Catalog from ".";
import { IBook, ICategory } from "../../types";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations: Record<string, string> = {
        seeMore: "See More",
        seeLess: "See Less",
        bookAlreadyAdded: "Book already added",
        catalog: "Catalog",
        loading: "Loading",
        doYouWantToRent: `Do you want to rent ${options?.book || ""}?`,
        clickToConfirm: `Click to confirm ${options?.book || ""}.`,
      };
      return translations[key] || key;
    },
  }),
}));

jest.mock("../../storage", () => ({
  setLocalStorage: jest.fn(),
  getLocalStorage: jest.fn(() => "[]"),
}));

describe("Catalog Component", () => {
  const mockCategories: ICategory[] = [
    { id: 1, name: "Fiction" },
    { id: 2, name: "Science" },
    { id: 3, name: "History" },
    { id: 4, name: "Fantasy" },
  ];

  const mockBooks: IBook[] = [
    { id: 101, name: "Book 1", category: { id: 1, name: "Fiction" }, image: "", author: { id: 1, name: 'Pedro' }, status: 'rented', price: 20 },
    { id: 102, name: "Book 2", category: { id: 2, name: "Science" }, image: "", author: { id: 1, name: 'Pedro' }, status: 'rented', price: 20 },
    { id: 103, name: "Book 3", category: { id: 3, name: "History" }, image: "", author: { id: 1, name: 'Pedro' }, status: 'rented', price: 20 },
    { id: 104, name: "Book 4", category: { id: 4, name: "Fantasy" }, image: "", author: { id: 1, name: 'Pedro' }, status: 'rented', price: 20 },
  ];

  it("renders the catalog with limited categories by default", () => {
    render(<Catalog categories={mockCategories} books={mockBooks} />);

  
    expect(screen.getByText("Catalog")).toBeTruthy();

  
    expect(screen.getByText("Fiction")).toBeTruthy();

  
    expect(screen.queryByText("Fantasy")).toBeFalsy();
  });

  it("expands and collapses categories when 'See More'/'See Less' is clicked", () => {
    render(<Catalog categories={mockCategories} books={mockBooks} />);

    const seeMoreButton = screen.getByText("See More");
    fireEvent.click(seeMoreButton);

  
    expect(screen.queryByText("Fantasy")).toBeTruthy();

    const seeLessButton = screen.getByText("See Less");
    fireEvent.click(seeLessButton);

  
    expect(screen.queryByText("Fantasy")).toBeFalsy();
  });
  
});
