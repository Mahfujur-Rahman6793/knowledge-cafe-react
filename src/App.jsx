import './App.css'
import Blogs from './component/Blogs/Blogs'
import Header from './component/header/Header'
import BookMarks from './component/bookmarks/BookMarks';
import { useState } from 'react';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookMark = (blog)=>{
    // console.log(blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
      
    </>
  )
}

export default App
