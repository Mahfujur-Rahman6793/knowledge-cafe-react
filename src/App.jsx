import './App.css'
import Blogs from './component/Blogs/Blogs'
import Header from './component/header/Header'
import BookMarks from './component/bookmarks/BookMarks';
function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
      
    </>
  )
}

export default App
