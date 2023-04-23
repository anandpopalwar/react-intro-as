// import React from "react"
import { useState } from "react"


const Parent = () => {

    // const [showState , setShowState] = useState({
    //     child1:false,
    //     child2:false,
    //     child3:false,
    // })

    return (
        <>
            <Child
                title={'The standard Lorem Ipsum passage, used since the 1500s '}
                // showState={showState.child1}
                // setShowState={false}
                disc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
            <Child
                title={'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'}
                // showState={showState.child2}
                // setIsvisible={false}
                disc={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'}
            />
            <Child
                title={'1914 translation by H. Rackham'}
                // showState={showState.child3}
                // setIsvisible={false}
                disc={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.'}
            />
        </>

    )
}

const Child = ({ disc, title, }) => {

    const [isVisible, setIsvisible] = useState(false)

    return (
        <div className="w-2/3 bg-blue-300 mx-auto my-4 p-4 rounded-lg" >
          
            <div className="flex justify-between">
                <h1 className=" text-2xl font-bold ">  {title} </h1>
                {isVisible ?
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                }

            </div>

            {isVisible === true && <p className=" text-slate-700  text-sm font-semibold opacity-7np0  "> {disc}</p>}

  {
                isVisible ?
                    <button className="rounded-2xl font-semibold inline-block  hover:underline" onClick={() => {
                        // setshow(()=>{})
                        setIsvisible(false)
                    }}  > show less...</button>
                    :
                    <button className=" rounded-2xl font-semibold  inline-block  hover:underline" onClick={() => {
                        setIsvisible(true)
                    }}  > show more...</button>
            }



        </div>
    )
}

export default Parent;