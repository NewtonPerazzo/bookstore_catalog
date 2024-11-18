# 📚 BookStore (React)

This project is a library application designed for both mobile and web use, developed with **React** and **Vite**. Users can view a book catalog and add items to a cart for rental. The project uses **mock data** and simulates real API calls.

---

### 🛠️ Technologies Used

### **Languages and Tools**
- **React**: Framework for building interactive and responsive interfaces.
- **Vite**: Tool for a fast development environment.
- **TypeScript**: Adding static typing.
- **Styled Components**: Library for dynamic styling using CSS-in-JS.


### **Libraries**
- **i18n**: Translation and internationalization management.
- **Jest**: Unit testing framework.
- **Husky**: Pre-commit hooks tool to enforce best coding practices.

---

### 🏗️ Project Structure

### Responsive Layout
The interface follows a well-structured layout:
1. **Left Column**: Shopping cart where selected books are displayed for rental.
2. **Right Column**: Book catalog with mock data to simulate the listing of options.
3. **Header**: Top bar for navigation or additional information.
4. **Footer**: Bottom bar with potential links or credits.

Styling is managed with **Styled Components**, enabling organized and reusable styles.

---

### 🛠️ How to Run the Project

1. Clone the [repository](https://github.com/NewtonPerazzo/bookstore_catalog):
  ```git clone <repository-ssh-or-link>```
2. Install dependencies:
  ```yarn```
3. Start the project:
  ```yarn dev```
4. Open the project in your browser at http://localhost:5173

---

### 🧪 Tests
The project uses Jest to ensure code quality. To run the tests, execute:
```yarn test```

---

### 🛡️ Husky - Pre-commit Hooks
Husky is configured to run automated tasks before each commit, ensuring code quality and consistency.

---

### 🌍 Internationalization
The application supports multiple languages using i18n, making it easy to expand and translate into new languages.

---

### 🗂️ Folder Structure
    📂 /src

        📂 /components       # Reusable components
        📂 /services          # Services and API call simulations
        📂 /mock              # Project mocks
        📂 /types             # Data type definitions
        📂 /storage           # Functions to store/remove/fetch data from local storage

    App.tsx                  # Main component

