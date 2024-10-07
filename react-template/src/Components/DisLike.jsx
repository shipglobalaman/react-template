import React from 'react';

const DisLike = ({ style, tooltipPosition }) => {
  const styleClass =
    style === "circle"
      ? "rounded-full"
      : style === "rounded"
      ? "rounded-xl"
      : "rounded-none";

  // Define position classes for the tooltip
  const tooltipClass =
    tooltipPosition === "top"
      ? "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
      : tooltipPosition === "bottom"
      ? "top-full left-1/2 transform -translate-x-1/2 mt-2"
      : "right-full top-1/2 transform -translate-y-1/2 mr-2"; // default to left

  return (
    <div className="relative flex items-center group">
      <button
        className={`${styleClass} bg-black border border-white p-2.5 text-center text-sm text-white w-10 h-11`}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-thumbs-down"
        >
          <path d="M10 14V19a3 3 0 0 0 3 3l4-9V3H5.72a2 2 0 0 0-2 1.72L3 10v1a2 2 0 0 0 2 2h5z"></path>
          <line x1="22" y1="10" x2="22" y2="4"></line>
        </svg>
      </button>

      {/* Tooltip */}
      <div
        className={`absolute ${tooltipClass} bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-28`}
      >
        I do not like this Movie
      </div>
    </div>
  );
};

export default DisLike;
