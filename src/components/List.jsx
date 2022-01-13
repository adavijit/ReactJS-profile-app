import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../api.js";

const List = () => {
  const [userData, setUserData] = useState([{}]);
  const [visible, setVisible] = useState(false);

  //=> don't use variables like 'xx' , give proper name
  // also don't use let
  const getData = async () => {
    const userList = await getAllData();
    console.log(userList.data, "getdata");
    setUserData(userList.data);
  };

  //=> Only call getData and update the states from there. Don't need to use async in useEffect
  useEffect(() => {
    getData();
    setVisible(true);
  }, []);

  // console.log(userData.data,"hiiiii");
  return visible ? (
    <div>
      <ul >
        { userData.map((element, index) => {
          // => use `index` as key to avoid warnings
          console.log(element.name, "element");
          return (
            <li key={index}>
              <Link key={index} to={`/userdetails/${element.id}`}>{element.name}</Link>
            </li>
          );
        }) }
      </ul>
    </div>
  ) : (
    ""
  );
  // return userList;
};

export default List;
