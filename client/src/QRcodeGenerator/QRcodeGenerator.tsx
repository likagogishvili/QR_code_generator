import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import useStore from "../store/store";

import "./qrCode.scss";
import { Button, Form, Input } from "antd";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const { users } = useStore();
  const [form] = Form.useForm();

  const generateQRCode = async (id: number) => {
    const qrCodeData = `http://192.168.0.141:3000/UserPage/${id}`;
    setUrl(qrCodeData);
  };
  const onFinish = (values: any) => {
    const foundItem = users.find((item) => item.email === values.email);
    if (foundItem) {
      generateQRCode(foundItem.id);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleDownloadClick = () => {
    if (url && qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "qrcode.png";
        downloadLink.click();
      });
    }
  };

  return (
    <div className="qr_cont">
      <Form
        className="inputFields"
        form={form}
        layout="horizontal"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="მეილი"
          name="email"
          className="email_field"
          rules={[
            {
              validator: (_, value) => {
                //check If user email already exists
                const isEmailExists = users.some(
                  (user) => user.email === value
                );
                if (isEmailExists) {
                  return Promise.resolve("მეილი უკვე არსებობს");
                }
                return Promise.reject("მეილი არ არსებობს");
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            გენერირება
          </Button>
        </Form.Item>
      </Form>
      {url && (
        <div className="qr-code-container" ref={qrCodeRef}>
          <QRCode value={url} />
        </div>
      )}
      {url && (
        <Button
          className="download-button"
          type="primary"
          onClick={handleDownloadClick}
        >
          გადმოწერა
        </Button>
      )}
    </div>
  );
};

export default QRCodeGenerator;
