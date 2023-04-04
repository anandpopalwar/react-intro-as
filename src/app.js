import React from 'react'
import ReactDOM from 'react-dom/client'

//importing components from other component files
import NavBar from './component/NavBar'
import SearchBar from './component/SearchBar'
import CardsContainer from './component/CardsContainer'



const MainApp = () => {
    return (
        <div>
            {/* navbar */}
            <NavBar />
            {/* <SearchBar /> */}
            <CardsContainer />
            {/* card container */}
            {/* cards */}
            {/* footer */}
        </div>
    )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<MainApp />)

