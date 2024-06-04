const Label = (props) => {
    const { children, htmlFor} =props;
    return(
        <label htmlFor={htmlFor}
        className="block text-zinc-700 text-sm font-bold mb-2">
        {children}
        </label>
       
    )
}

export default Label;