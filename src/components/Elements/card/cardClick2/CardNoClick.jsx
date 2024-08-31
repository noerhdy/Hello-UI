import NoClick from "./NoClick";
import ClickImage2 from "./NoClick";

const CardNoClick = (props) => {
  const { imgUrl, titleText, titleText2, titleName, nameLink, link } = props;
  return (
    <div className="min-w-100 space-y-1 my-8">
      <NoClick
        imgUrl={imgUrl}
        titleText={titleText}
        titleText2={titleText2}
        titleName={titleName}
        nameLink={nameLink}
        link={link}
      />
    </div>
  );
};

export default CardNoClick;
