import Logo from './Logo'
import Items from './Items';

// import useOnline from './utils/useOnline'


const NavBar = () => {
    // const onlineStatus = useOnline()

    return (
        <div className='flex relative  justify-between list-none  px-5   justify-items-center  items-center rounded-none  md:mb-4 bg-black md:h-20 mx-auto   md:w-4/5 md:m-auto md:my-4 h-14  md:rounded-full '  >
            <Logo />
            <Items />
            {/* <div className='  px-2 text-base  absolute  top-0 text-center  left-2/4'> {onlineStatus == false ? '🔴offline' : '🟢online'} </div> */}
        </div>
    )
}
export default NavBar;