import { useSelector } from 'react-redux'
import CartCard from './CartCard'
import { useDispatch } from 'react-redux'
import { clearCart } from './utils/CartSlice'

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()
    const clearList=()=>{
        dispatch(clearCart())
        
    }


    return(
        <div className=" w-11/12 bg-red-100 mx-auto  md:w-4/5 p-4 rounded-xl my-4 ">
            <div className='flex justify-between '>
            <h1 className="font-bold text-2xl text-stone-600 ">cart items({cartItems.length}) </h1>
            <button className='px-4 rounded-xl bg-red-200 font-semibold hover:bg-red-400' onClick={()=>clearList()}> clear cart </button>
            </div>
            <div className='CardsContainer grid gap-6  container md:container  sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-3 mx-auto my-4   w-4/5 rounded-2xl '>
               {
                cartItems.map((Restourant)=>{
                    return(

                        <CartCard {...Restourant} key={Restourant.id} />
                        )
                })
               }
            </div>
         </div>
    )
}

export default Cart;