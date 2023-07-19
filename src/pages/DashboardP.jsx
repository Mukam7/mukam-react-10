import { useState } from "react";

const FlipCard = ({ titleFront, titleBack, textBack, frontImageSrc }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontImageSrc && <img src={frontImageSrc} alt="Front Image" />}
          <p className="title">{titleFront}</p>
        </div>
        <div className="flip-card-back">
          <p className="title">{titleBack}</p>
          <p>{textBack}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardP = () => {
  return (
    <div className="flip-card-two-item">
      <FlipCard
        titleFront="Teacher"
        titleBack="TEACHER"
        textBack="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi nam numquam dolore sint eligendi praesentium harum."
        frontImageSrc="https://www.shutterstock.com/image-vector/smiling-teacher-near-blank-black-600w-611195498.jpg"
      />
      <FlipCard
        titleFront="Student"
        titleBack="STUDENT"
        textBack="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi nam numquam dolore sint eligendi praesentium harum."
        frontImageSrc="https://www.shutterstock.com/image-vector/young-male-teacher-writing-chalk-600w-714537196.jpg"
      />
    </div>
  );
};
export default DashboardP;
