import Input from "./InputIndex"
import Label from "./LabelIndex"

const InputForm = (props) => {
    const {label, name, type, placeholder } =props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
          </div>
    )
}

export default InputForm;