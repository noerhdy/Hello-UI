import ClickTitle from "./ClickTitle";
import ClickImage from "./ClickImage";

const CardClick = (props) => {
  const { defaultImg, clickImg1, clickImg2, titleText, titleText2, titleName } =
    props;
  return (
    <div className="min-w-100 space-y-1 my-8">
      <ClickImage
        defaultSrc={defaultImg}
        clickedSrc1={clickImg1}
        clickedSrc2={clickImg2}
      />
      <div className="flex flex-row justify-between pl-2">
        <ClickTitle
          titleName={titleName}
          titleText={titleText}
          titleText2={titleText2}
        />
      </div>
    </div>
  );
};

export default CardClick;
