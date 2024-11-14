import { useEffect } from 'react'
import MainLayout from './components/Layout/MainLayout'
import Catalog from './components/Catalog'
// import { getCategories } from './services/categories'
// import { getBooks } from './services/books'
// import { IBook, ICategory } from './types'
import { categories } from './mock/categories'
import { books } from './mock/books'
import Cart from './components/Cart'

function App() {
  // const [categoriesState, setCategories] = useState<ICategory[] | undefined>([])
  // const [booksState, setBooks] = useState<IBook[] | undefined>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const categoriesData = await getCategories()
        //const booksData = await getBooks()
        // setCategories(categoriesData)
        // setBooks(booksData)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    
    fetchData()
  }, [])
  
  return (
    <>
      <MainLayout 
        rightElement={<Catalog categories={categories} books={books} />} 
        leftElement={<Cart />} 
      />
    </>
  )
}

export default App