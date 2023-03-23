


    //now if we have to create html structure like this using react it will look like this
    // < div  id="parant">
    // <div id="child">
    //     <h1>i am h1 tag</h1>
    //     <h1>i am h2 tag</h1>
  //      </div>
//   </ div >


const parant = React.createElement(
    'div',
    { id: 'parent'},
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'i am h1 tag'),React.createElement('h2',{},'i am h2 tag')])
)
const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(parant)
