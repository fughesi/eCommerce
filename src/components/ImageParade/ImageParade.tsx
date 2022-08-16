import "./ImageParade.css";

const ImageParade = () => {
  const images = new Array(5).fill(null).map((i) => {
    <div className="parade">{i}</div>;
  });

  return (
    <div className="imageParadeMain">
      <div className="productMainPhoto"></div>
      {images}
    </div>
  );
};

export default ImageParade;
