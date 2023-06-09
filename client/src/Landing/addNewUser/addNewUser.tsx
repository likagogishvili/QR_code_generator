import "./addNewUser.scss";
import { useState } from "react";
import UserModal from "../modal/Modal";
import axios from "axios";
import { Button } from "antd";
import { User } from "../../types/types";

function AddNewUser(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values: User) => {
    let newUserForPost = {
      name: values.name,
      lname: values.lname,
      email: values.email,
      position: values.position,
      phoneNumber: values.phoneNumber,
    };

    axios
      .post("http://localhost:3001/add-user", {
        newUser: newUserForPost,
      })
      .then(function () {
        props.setUpdateUserData(!props.updateUserData);
        alert("User Added");
        setIsModalOpen(false);
      })
      .catch(function (error: object) {
        alert("Failed to add user");
        console.log(error);
      });
  };
  return (
    <div className="newUserCont">
      <Button type="primary" onClick={showModal}>
        მომხმარებლის შექმნა
      </Button>
      <UserModal
        onFinish={onFinish}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        header="მომხმარებლის შექმნა"
        buttonTitle="დადასტურება"
      />
    </div>
  );
}

export default AddNewUser;
