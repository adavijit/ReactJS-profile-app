import { useParams } from "react-router-dom";
import { getOneProfileData } from "../api.js";
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import './UserStyle.css';
import { Picture } from "./Picture";

const UserDetails = () => {
  //=>
  const [userData, setUserData] = useState({});

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
  useEffect(() => {
    getData();
  });

  console.log(userData, "hi");

  return (
    <div class="container">
      <div class="card-content">
        <Card>
          <Card.Body>
            <Card.Title>Hey! {userData.name}</Card.Title>
            <Card.Text>
              <Picture gender={userData.gender} picWidth="90" picHeight="90"  
              style={{ "border-radius" : "50%" }} />
            </Card.Text>
            
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;
