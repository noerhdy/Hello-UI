const AuthLayouts = (props) => {
    const {children, title} =props
    return (
        <div className="w-full max-w-sm bg-[#f7f7f7] dark:bg-zinc-950 drop-shadow-md p-8 rounded-md text-balance">
        <h1 className="text-3xl font-bold mb-2 text-zinc-800">{title}</h1>
        <p className=" text-zinc-400 mb-2">Welcome, Please enter your details</p>
     {children}
      </div>
    )
} 

export default AuthLayouts;