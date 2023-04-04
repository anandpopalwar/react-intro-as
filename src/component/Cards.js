const Cards = (cardItems) => {
    // const {key}=cardItems
    return (
        <div className='Cards' >
            <img src={cardItems.foodImg} />
            <div className='CardsDiscription'>
                <div className="miniFlex">
                <h4>{cardItems.foodName}</h4>
                <p>{cardItems.veg = cardItems.veg == true ? " veg 🟢": " non-veg 🔴"}</p>
                </div>
               <div className="otherDisc"> 

                <p>{cardItems.resName}</p>
                <p>{cardItems.cusine}</p>
                <p>{cardItems.deliveryTime} mins</p>
                <p>{cardItems.rating}⭐</p>
               </div>
                <h4>₹{cardItems.prize} for single</h4>
            </div>
        </div>
    )
}

export default Cards;