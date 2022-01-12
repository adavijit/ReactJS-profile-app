import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../api.js";

const List = () => {
  const [userData, setUserData] = useState([{}]);
  const [visible, setVisible] = useState(false);

  //=> don't use variables like 'xx' , give proper name
  // also don't use let
  let getData = async () => {
    let userList = await getAllData();
    console.log(userList.data, "getdata");
    const xx = userList.data;
    return xx;
  };

  //=> Only call getData and update the states from there. Don't need to use async in useEffect
  useEffect(async () => {
    let user = await getData();
    setUserData(user);
    setVisible(true);
    console.log(userData, "data obtained");
  }, []);

  // console.log(userData.data,"hiiiii");
  return visible ? (
    <div>
      <ul>
        {userData.map((element, index) => {
          // => use `index` as key to avoid warnings
          console.log(element.name, "element");
          return (
            <li>
              <Link to={`/userdetails/${element.id}`}>{element.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
  // return userList;
};

export default List;
