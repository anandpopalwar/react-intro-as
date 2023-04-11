import {Link} from 'react-router-dom' 
const Logo = () => {
    return (
        <div className='logo'>
            <Link to='/'>
            {/* <img src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg?w=740' /> */}
            🍅FOODCOURT
            </Link>
        </div>
    )
}

export default Logo;