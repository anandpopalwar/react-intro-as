import {Link} from 'react-router-dom' 
const Logo = () => {
    return (
        <div className='logo  md:text-2xl font-bold  w-45 inline-block px-4'>
            <Link to='/' className=' inline-block text-red-500 ' >
            {/* <img src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg?w=740' /> */}
            🍅FOODCOURT
            </Link>
        </div>
    )
}

export default Logo;