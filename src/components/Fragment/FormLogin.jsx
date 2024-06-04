import Button from "../Elements/Button/ButtonIndex";
import InputForm from "../Elements/input";

const FormLogin = () =>{
    return (
        <form action="">
        <InputForm label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"/>
        <InputForm label="Password"
        type="password"
        placeholder="******"
        name="password"/>
      <Button classname="bg-zinc-800 w-full hover:bg-black">Login</Button>
      </form>
    )
}

export default FormLogin;