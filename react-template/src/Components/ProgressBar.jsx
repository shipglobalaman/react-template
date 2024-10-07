const ProgressBar = ({ progress ,color,vlength }) => {
    const colorStyle = 
    color === "blue" 
    ? 'bg-blue-500'
    : color === "purple"
    ? 'bg-purple-600'
    : 'bg-red-500';
  return (
    <div className=" h-3 flex ">
    <div className=" w-[300px] bg-gray-200 rounded-full h-1 mt-3 ml-2">
      <div
        className={`${colorStyle}    h-full rounded-full`}
        style={{ width: `${progress}%` }} 
      />
    </div>
    <span className="text-white text-[12px] mt-0.5 ml-1">{vlength} </span>
    </div>
  );
};

export default ProgressBar;
