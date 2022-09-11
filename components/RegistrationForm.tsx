import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';


type PropsType = {
  onSubmit:Function
}

const RegistrationForm:React.FC<PropsType> = ({onSubmit}) => {

  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        username:"",
        email:"",
        password:""
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input id="SignupUsernameInput"/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input id="SignupEmailInput"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"

        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password id="SignupPasswordInput"/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
