const CardImage = (props) => {
  const { imgUrl, titleName, titleText } = props;
  return (
    <>
      <div className="relative rounded-xl dark:bg-zinc-900 sm:p-4 p-0 bg-zinc-100 shadow-2xl appearance-none ">
        <img
          className="object-cover aspect-video bg-center duration-500 ease-in-out rounded-t-xl sm:rounded-lg"
          src={imgUrl}
        ></img>
        <div className="flex flex-col items-start sm:mx-0 mx-4 sm:py-2 py-4">
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
