const CardImage = (props) => {
  const { imgUrl } = props;
  return (
    <>
      <div className="relative p-4 rounded-md bg-zinc-200">
        <img
          className="object-cover aspect-video  drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
          src={imgUrl}
        ></img>
      </div>
    </>
  );
};

export default CardImage;
