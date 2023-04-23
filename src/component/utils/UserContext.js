import { createContext } from "react";

const UserContext = createContext({
    user:{
        firstName:'Anand',
        LastName:'popalwar',
        mail:'anand@gmail.com',
        phone:8779670638,
        profileURL:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        gender:'male',
    }
})

export default UserContext;