import ClickImage from "./ClickImage";

const CardClick = (props) => {
  const {
    defaultImg,
    clickImg1,
    clickImg2,
    titleText,
    titleText2,
    titleName,
    nameLink,
    link,
  } = props;
  return (
    <div className="min-w-100 space-y-1 my-8">
      <ClickImage
        defaultSrc={defaultImg}
        clickedSrc1={clickImg1}
        clickedSrc2={clickImg2}
        titleText={titleText}
        titleText2={titleText2}
        titleName={titleName}
        nameLink={nameLink}
        link={link}
      />
    </div>
  );
};

export default CardClick;
