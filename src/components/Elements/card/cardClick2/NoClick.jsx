import CtaCard from "../../Button/CtaCard";

const NoClick = ({
  alt,
  imgUrl,
  titleText,
  titleText2,
  titleName,
  nameLink,
  link,
}) => {
  return (
    <div className="relative rounded-xl dark:bg-zinc-900 sm:p-4 p-0 bg-zinc-100 appearance-none shadow-2xl">
      <div className="relative group">
        <img
          src={imgUrl}
          alt={alt}
          className="object-cover aspect-video bg-center duration-500 ease-in-out rounded-t-xl sm:rounded-lg cursor-default"
        />
      </div>
      <div className="flex justify-between items-center sm:mx-0 mx-4 sm:py-2 py-4">
        <div className="flex-col">
          <h2 className="font-medium text-zinc-800 dark:text-zinc-200 text-[1rem]">
            {titleName}
          </h2>
          <div className="flex space-x-4 sm:text-[0.75rem] text-[0.625rem] items-center">
            <p className="text-zinc-400 dark:text-zinc-600 rounded-md">
              {titleText}
            </p>
            <p className="text-zinc-400 dark:text-zinc-600 rounded-md">
              {titleText2}
            </p>
          </div>
        </div>
        <div>
          <CtaCard nameLink={nameLink} link={link} />
        </div>
      </div>
    </div>
  );
};

export default NoClick;
