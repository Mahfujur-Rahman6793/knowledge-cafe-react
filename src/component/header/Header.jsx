import profile from '../../assets/image/02.jpg'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 mx-4 border-b-2'>
            <h1 className='text-3xl font-bold  text-red-300'>Knowledge cafe</h1>
            <img className='profile-image rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;