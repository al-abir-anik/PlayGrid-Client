import { Galleria } from "primereact/galleria";
import "./imageGallery.css";

const ImageGallery = ({ gameImages }) => {
  const formattedImages = gameImages.map((img, index) => ({
    itemImageSrc: img,
    thumbnailImageSrc: img,
    alt: `GTA V Screenshot ${index + 1}`,
  }));

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", height: "32rem", objectFit: "cover" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{
          height: "4rem",
          width: "auto", 
          objectFit: "cover"
        }}
      />
    );
  };

  return (
    <div className="card">
      <Galleria
        value={formattedImages}
        responsiveOptions={responsiveOptions}
        numVisible={6}
        autoPlay
        circular
        transitionInterval={1500}
        transitionOptions={{ animation: 'fade' }}
        style={{
          width: "100%",
          height: "100%",
        }}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />
    </div>
  );
};

export default ImageGallery;
