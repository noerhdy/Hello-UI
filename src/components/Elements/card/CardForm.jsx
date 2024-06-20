import Input from "../input/InputIndex";

const CardForm = (props) => {
  const {
    name,
    type,
    placeholder,
    autoComplete,
    accept,
    value,
    onChange,
    imgUrl,
    ...rest
  } = props;
  return (
    <>
      <div className="space-y-4">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          accept={accept}
          onChange={onChange}
          {...rest}
        />

        {imgUrl && (
          <img
            className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
            src={imgUrl}
          ></img>
        )}
      </div>
    </>
  );
};

export default CardForm;
