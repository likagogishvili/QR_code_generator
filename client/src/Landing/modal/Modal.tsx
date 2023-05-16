import { useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import useStore from "../../store/store";

const UserModal = (props: any) => {
  const [form] = Form.useForm();
  const { users } = useStore();

  useEffect(() => {
    // Set the initial form values based on props
    form.setFieldsValue({
      name: props.newUser.name,
      lname: props.newUser.lname,
      email: props.newUser.email,
      position: props.newUser.position,
      phoneNumber: props.newUser.phoneNumber,
    });
  }, [form, props.newUser]);

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    props.onFinish(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title={props.header}
      open={props.isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="სახელი"
          name="name"
          rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სახელი" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="გვარი"
          name="lname"
          rules={[{ required: true, message: "გთხოვთ შეიყვანოთ გვარი" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="მეილი"
          name="email"
          rules={[
            { required: true, message: "გთხოვთ შეიყვანოთ მეილი!" },
            { type: "email", message: "გთხოვთ შეიყვანოთ ვალიდური მეილი" },

            {
              validator: (_, value) => {
                //check If user email already exists
                const isEmailExists = users.some(
                  (user) => user.email === value
                );
                if (isEmailExists) {
                  return Promise.reject("მეილი უკვე არსებობს");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="პოზიცია"
          name={"position"}
          rules={[
            { required: true, message: "გთხოვთ შეიყვანოთ თქვენი პოზიცია" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ნომერი"
          name="phoneNumber"
          rules={[
            { required: true, message: "გთხოვთ შეიყვანოთ მობილურის ნომერი" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">
            {props.buttonTitle}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
