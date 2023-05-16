import { useEffect, useState } from "react";
import useStore from "../store/store";
import axios from "axios";
import "./landing.scss";
import AddNewUser from "./addNewUser/addNewUser";

function LandingPage() {
  const {setUsers} = useStore();
  let usersURl = "http://localhost:3001/get-users";
  const [updateUserData, setUpdateUserData] = useState(false);

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
  }, [updateUserData]);


  return (
    <div className="main_container">
      <AddNewUser
        setUpdateUserData={setUpdateUserData}
        updateUserData={updateUserData}
      />

    </div>
  );
}

export default LandingPage;
