import { useParams } from "react-router-dom";
import { getAllData } from '../api.js';
import { useEffect, useState } from "react";


const UserDetails = () =>{
    const [userData, setUserData] = useState([{}]);
    const [details, setDetails] = useState([{}]);

    const {id} = useParams();
    console.log(id, "from pramas");
    let getData = async () =>{
        userData.map((element, index) =>{
            console.log(element.id, parseInt(id));
    
            if(element.id === parseInt(id)){
                console.log("if inside");
                setDetails(element);
            }
            
    })
    //     let userList = await getAllData();
    //     // console.log(userList.data,"getdata");
    //    setUserData(userList.data);
    //     console.log(userData,"userdata");
        
   
}
    
    
    useEffect(async() => {
        const user = await getAllData();
        console.log(user.data, "logginf getdata");
        setUserData(user.data);
        // console.log(userData, "set usedata");
        // const data = await getDetails()
        // setUserDetails(data);
        await getData();
        
    }, [])

    console.log(userData,"hi");
    

  return(
    <div>
        <p>Details: {id}</p>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Gender: {details.gender}</p>
    </div>
)

}

export default UserDetails;