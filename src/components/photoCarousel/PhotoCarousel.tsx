import "./PhotoCarousel.css";

const PhotoCarousel = () => {
  const carousel = new Array(6)
    .fill("https://placeholder.photo/img/140")
    .map((i, index) => {
      return <img src={i} key={index} />;
    });
  const dots = new Array(3).fill(null).map((i) => {
    return <div className="dots" ></div>;
  });
  
  return (
    <div>
      <div className="photoCarouselContainer">{carousel}</div>
      <div className="dotContainer">{dots}</div>
    </div>
  );
};

export default PhotoCarousel;
