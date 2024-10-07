import Carousel from "./Carousel";
const InnerCard = ({ imageUrl, title, type ,url }) => {
  const images =[
     'https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg',
    'https://rukminim2.flixcart.com/image/850/1000/l12h1u80/poster/e/j/f/large-batman-comic-poster-on-large-print-36x24-inches-poster2716-original-imagcpxfbcr8nnvj.jpeg?q=90&crop=false'
  ];
  const typeStyle = {
    image: (
      <img src={imageUrl} alt={title} className="w-full h-full object-cover " />
    ),
    carousel: <Carousel images={images} />,
  };

  // ? '  {`<img src=${imageUrl} alt={title} className="w-full h-full object-cover " />`} '
  // : type === "carousel"
  // ? '<Carousel/>'
  // : ''
  return (
    <div className="bg-white w-[340px] h-[300px] rounded-2xl overflow-hidden ">
      {typeStyle[type]}
    </div>
  );
};

export default InnerCard;
