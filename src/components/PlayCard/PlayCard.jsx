import "./playCard.css";
import HeartsImage from "../../assets/images/hearts.png";
import DiamondsImage from "../../assets/images/diamonds.png";
import ClubsImage from "../../assets/images/clubs.png";
import SpadesImage from "../../assets/images/spades.png";

export const PlayCard = ({ suit, value }) => {
  function getSuitImageSrc() {
    let imgSrc = "";
    if (suit === "hearts") imgSrc = HeartsImage;
    else if (suit === "diamonds") imgSrc = DiamondsImage;
    else if (suit === "clubs") imgSrc = ClubsImage;
    else {
      imgSrc = SpadesImage;
    }
    return imgSrc;
  }

  const imageSrc = getSuitImageSrc();

  return (
    <div className="playcard">
      <div className="top">
        <div>{value}</div>
        <img src={imageSrc} alt="suit" />
      </div>
      <div className="center">
        <img src={imageSrc} alt="suit" />
      </div>
      <div className="bottom">
        <div>{value}</div>
        <img src={imageSrc} alt="suit" />
      </div>
    </div>
  );
};
