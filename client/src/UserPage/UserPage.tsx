import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function UserPage() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  let usersURl = "http://localhost:3001/get-users";
  console.log(users);
  //Get Users Data
  useEffect(() => {
    axios
      .get(usersURl)
      .then((res: any) => {
        const addKeys = res.data.map((element: any, index: number) => ({
          ...element,
          key: element.id,
          index: index + 1,
        }));
        setUsers(addKeys);
      })
      .catch((err: object) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return <div>User Page - ID: {id}</div>;
}

export default UserPage;
