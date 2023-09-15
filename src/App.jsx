import './App.css'
import Blogs from './component/Blogs/Blogs'
import Header from './component/header/Header'
import BookMarks from './component/bookmarks/BookMarks';
import { useState } from 'react';
function App() {
  const [bookmark, setBookmark] = useState([]);
  const handleBookMark = ()=>{
    console.log('assitechi taratari !!!!!!!');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <BookMarks></BookMarks>
      </div>
      
    </>
  )
}

export default App
