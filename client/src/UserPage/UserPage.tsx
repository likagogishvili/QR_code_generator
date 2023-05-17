import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { logo } from "../assets/logo/logo";
import {
  PhoneOutlined,
  SendOutlined,
  MailOutlined,
  IdcardOutlined,
  GlobalOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { User } from "../types/types";
import "./userPage.scss";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  let userURL = "http://192.168.0.141:3001/get-user";

  // Get User's Data
  useEffect(() => {
    axios
      .post(userURL, {
        userId: id,
      })
      .then(function (response) {
        if (response.data) {
          setUser(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const handlePhoneClick = () => {
    if (user?.phoneNumber) {
      window.location.href = `tel:+995${user.phoneNumber}`;
    }
  };

  const handleEmailClick = () => {
    if (user?.email) {
      window.location.href = `mailto:${user.email}`;
    }
  };
  const generateVCard = () => {
    const vCardText = `BEGIN:VCARD
VERSION:3.0
FN:${user?.name} ${user?.lname}
TEL;TYPE=CELL:${user?.phoneNumber}
EMAIL;TYPE=WORK:${user?.email}
END:VCARD`;

    const element = document.createElement("a");
    const file = new Blob([vCardText], { type: "application/octet-stream" });
    element.href = URL.createObjectURL(file);
    element.download = "contact.vcf";
    element.click();
  };
  return (
    <div className="user_container">
      {user?.name ? (
        <>
          <section className="section_1">
            <img src={logo} alt="" />
            <h2>{user.name + " " + user.lname}</h2>
            <h3>{user.position}</h3>
            <div className="icon_cont">
              <div className="little_containers" onClick={handlePhoneClick}>
                <PhoneOutlined />
                <p>დარეკვა</p>
              </div>
              <div className="little_containers" onClick={handleEmailClick}>
                <SendOutlined />
                <p>ელფოსტა</p>
              </div>
            </div>
          </section>
          <section className="section_2">
            <div className="otherInfo">
              <PhoneOutlined />
              <div
                className="right_container"
                onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}
              >
                <p>{user.phoneNumber}</p>
                <p className="grey">მობილურის ნომერი</p>
              </div>
            </div>
            <div
              className="otherInfo"
              onClick={handleEmailClick}
              style={{ cursor: "pointer" }}
            >
              <MailOutlined />
              <div className="right_container">
                <p>{user.email}</p>
                <p className="grey">ელფოსტა</p>
              </div>
            </div>
            <div className="otherInfo">
              <IdcardOutlined />
              <div className="right_container">
                <p>{user.position}</p>
                <p className="grey">პოზიცია</p>
              </div>
            </div>
            <div className="otherInfo">
              <GlobalOutlined />
              <div className="right_container">
                <Link
                  to="https://www.geostat.ge"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <p>https://www.geostat.ge </p>
                </Link>
                <p className="grey">საიტი</p>
              </div>
            </div>
            <div className="addUser">
              <UserAddOutlined onClick={generateVCard} />
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserPage;
