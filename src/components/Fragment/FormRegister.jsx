import Button from "../Elements/Button/ButtonIndex";
import InputForm from "../Elements/input";

const FormRegister = () =>{
    return (
        <form action="">
        <InputForm label="Full Name"
        type="text"
        placeholder="Insert your full name"
        name="fullname"
        autoComplete="user-name"/>
         <InputForm label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        autoComplete="new-mail"/>
        <InputForm label="Password"
        type="password"
        placeholder="******"
        name="new-password"
        autoComplete="new-password"
        />
        <InputForm label="Confirm Password"
        type="password"
        placeholder="******"
        name="new-password"
        autoComplete="new-password"/>
      <Button classname="bg-zinc-800 w-full hover:bg-black">Register</Button>
      </form>
    )
}

export default FormRegister;