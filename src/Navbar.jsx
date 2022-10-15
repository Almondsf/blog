import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar font-quick'>
      <h1 className='text-2xl font-bold'> The Dojo Blog </h1>
      <div className='links text-l font-bold'>
        <Link to='/'>Home</Link>
        <Link to='./create'>New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
