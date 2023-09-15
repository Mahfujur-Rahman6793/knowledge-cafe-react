import PropTypes from 'prop-types';
import './Blog.css';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookMark}) => {
    const {title,author_image,hashtags} = blog;
    return (
        <div className='Introduction  border-2 border-red-300 rounded-lg p-5'>
            <img src={author_image} alt="" />
            <h2>{title} </h2>
            <button onClick={handleBookMark}><FaBookmark></FaBookmark></button>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='me-5 text-blue-600'><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;