const CardImage = (props) => {
  const { imgUrl, titleName, titleText } = props;
  return (
    <>
      <div className="relative p-0 shadow-2xl appearance-none rounded-xl dark:bg-zinc-900 sm:p-2 bg-zinc-100 ">
        <img
          className="object-cover duration-500 ease-in-out bg-center aspect-video rounded-t-xl sm:rounded-lg"
          src={imgUrl}
          draggable="false"
        ></img>
        <div className="flex flex-col items-start py-4 mx-4 sm:mx-0 sm:py-2">
          <h2 className="font-medium text-zinc-800 dark:text-zinc-200 text-[1rem]">
            {titleName}
          </h2>
          <p className="sm:text-[0.75rem] text-[0.625rem]  text-zinc-400 dark:text-zinc-600 rounded-md">
            {titleText}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardImage;
