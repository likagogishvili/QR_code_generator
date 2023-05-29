import { useEffect, useState } from "react";
import useStore from "../store/store";
import axios from "axios";
import "./landing.scss";
import AddNewUser from "./addNewUser/addNewUser";
import QRcodeGenerator from "../QRcodeGenerator/QRcodeGenerator";
import Header from "../Header/Header"

function LandingPage() {
  const { setUsers } = useStore();
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
    <>
      <Header />
      <div className="main_container">
        <AddNewUser
          setUpdateUserData={setUpdateUserData}
          updateUserData={updateUserData}
        />

        <QRcodeGenerator />
      </div>
    </>
  );
}

export default LandingPage;
