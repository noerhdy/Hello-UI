import CardImage from "./CardImage";

const CardIndex = (props) => {
  const { imgUrl, titleText, titleName } = props;
  return (
    <div className="group min-w-100 space-y-1 mb-8 ">
      <CardImage imgUrl={imgUrl} titleName={titleName} titleText={titleText} />
    </div>
  );
};

export default CardIndex;
