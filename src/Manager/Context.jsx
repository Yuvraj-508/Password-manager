import React, { useState ,useEffect} from 'react'
import { createContext } from 'react'

export const DataContext = createContext();


const DataProvider = ( props ) => {

    const [form,setForm]=useState({url:"",username:"",password:""})
    const [passwordArray,setPasswordArray] = useState([]);

     useEffect(() => {
       let passwords = localStorage.getItem("passwords");
       if (passwords) {
         setPasswordArray(JSON.parse(passwords));
       }
     }, []);

       useEffect(() => {
         console.log("Password array updated:", passwordArray);
       }, [passwordArray]);
 
     const value={
      setForm,
      form,
      passwordArray,
      setPasswordArray
     }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

export default DataProvider
