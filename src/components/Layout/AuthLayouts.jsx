const AuthLayouts = (props) => {
    const {children, title} =props
    return (
        <div className="w-full max-w-sm bg-neutral-200 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-2 text-zinc-800">{title}</h1>
        <p className="font-medium text-zinc-600 mb-2">Welcome, Please enter your details</p>
     {children}
      </div>
    )
} 

export default AuthLayouts;