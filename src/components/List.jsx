import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../api.js";
import "./ListStyle.css";
import { Table } from "react-bootstrap";
import { Picture } from "./Picture";


const List = () => {
  const [userData, setUserData] = useState([]);
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
    <div class="user-list">
      <Table>
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Usernames</th>
          </tr>
        </thead>
        <tbody>
          <td><hr class="horizontal-line"></hr></td>
          <td><hr class="horizontal-line"></hr></td>

          {userData.map((element, index) => {
            // => use `index` as key to avoid warnings

            console.log(element.name, "element");
            return (
              <tr key={index}> 
                <td class="sl-content">
                  <Picture gender={element.gender} picWidth="30" picHeight="30"/></td>
                <td class="user-content" key={index}>
                  <Link
                    key={index}
                    style={{ "text-decoration": "none" }}
                    to={`/userdetails/${element.id}`}
                  >
                    {element.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : (
    ""
  );
  // return userList;
};

export default List;
