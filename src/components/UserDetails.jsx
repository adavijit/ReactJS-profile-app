import { useParams } from "react-router-dom";
import { getOneProfileData } from "../api.js";
import { useEffect, useState } from "react";

const UserDetails = () => {
  //=>
  const [userData, setUserData] = useState([{}]);

  //=>
//   const [details, setDetails] = useState([{}]);

  const { id } = useParams();
  console.log(id, "from pramas");

  //=>  always use const while defining arrow functions as we won't redefine
  const getData = async () => {
    const user = await getOneProfileData(id);
    console.log(user.data, "logginf getdata");
    setUserData(user.data);
  };

  // => call getData and from there call api to get specific user details. No need to use async in useEffect
  useEffect( () => {
    getData();
  }, []);

  console.log(userData, "hi");

  return (
    <div>
      <p>Details: {id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
};

export default UserDetails;
