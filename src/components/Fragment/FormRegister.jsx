import Button from "../Elements/Button/ButtonIndex";
import InputForm from "../Elements/input";

const FormRegister = () =>{
    return (
        <form action="">
        <InputForm label="Full Name"
        type="text"
        placeholder="Insert your full name"
        name="fullname"/>
         <InputForm label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"/>
        <InputForm label="Password"
        type="password"
        placeholder="******"
        name="password"/>
        <InputForm label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"/>
      <Button classname="bg-zinc-800 w-full hover:bg-black">Register</Button>
      </form>
    )
}

export default FormRegister;