const ShoeCard = ({imgURL,
    changeBigShoeImage,
    bigShoeImg}) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div className={`border-2 rounded-full mb-11
      ${bigShoeImg === imgURL.bigShoe ?'border-blue-600': 'border-transparent'} cursor-pointer max-sm:flex-1
      `}   onClick={handleClick}>
        <div className="flex  justify-center items-center bg-card rounded-full
        bg-center bg-cover sm:w-40 sm:h-40  max-sm:p-4">
            
            <img src={imgURL.thumbnail} width={113} height={100} className="object-contain" /></div>
      </div>
    );
  };
  
  export default ShoeCard;