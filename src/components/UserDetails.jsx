import { useParams } from "react-router-dom";
import { getAllData } from "../api.js";
import { useEffect, useState } from "react";

const UserDetails = () => {
  //=>
  const [userData, setUserData] = useState([{}]);

  //=>
  const [details, setDetails] = useState([{}]);

  const { id } = useParams();
  console.log(id, "from pramas");

  //=>  always use const while defining arrow functions as we won't redefine
  let getData = async () => {
    userData.map((element, index) => {
      console.log(element.id, parseInt(id));

      if (element.id === parseInt(id)) {
        console.log("if inside");
        setDetails(element);
      }
    });
  };

  // => call getData and from there call api to get specific user details. No need to use async in useEffect
  useEffect(async () => {
    const user = await getAllData();
    console.log(user.data, "logginf getdata");
    setUserData(user.data);
    // console.log(userData, "set usedata");
    // const data = await getDetails()
    // setUserDetails(data);
    await getData();
  }, []);

  console.log(userData, "hi");

  return (
    <div>
      <p>Details: {id}</p>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Gender: {details.gender}</p>
    </div>
  );
};

export default UserDetails;
