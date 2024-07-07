import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

const CardIndex = (props) => {
  const { imgUrl, titleText, titleName } = props;
  return (
    <div className="group min-w-100 space-y-1 my-8 ">
      {/* <div className="flex-col bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800 p-4 mx-2 my-2 h-fit  rounded-md overflow-hidden dark:text-slate-50 drop-shadow"> */}
      <CardImage imgUrl={imgUrl} />
      {/* </div> */}
      <div className="flex pl-2 flex-row justify-between text-balance">
        <CardTitle titleName={titleName} titleText={titleText} />
      </div>
    </div>
  );
};

export default CardIndex;
