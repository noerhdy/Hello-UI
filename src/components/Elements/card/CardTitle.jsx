const CardTitle = (props) => {
    const{titleName, titleText} = props
    return (
        <>
        <h2 className="font-semibold  text-2xl">{titleName}</h2>
        <p className="text-justify text-sm">{titleText}.</p>
        </>


    )
  }
  
  export default CardTitle;