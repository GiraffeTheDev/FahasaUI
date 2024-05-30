import React from "react";

const ImageUpload = ({ url, name, className = "", onChange = () => {} }) => {
  return (
    <label className="flex overflow-hidden bg-gray-100 cursor-pointer ">
      <input type="file" name={name} className="hidden" onChange={onChange} />
      {!url && (
        <div className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg">
          <span className="flex items-center gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <p>Choose photo</p>
          </span>
        </div>
      )}
      {url && (
        <img src={url} className="h-[200px] w-full object-cover rounded-lg" />
      )}
    </label>
  );
};

export default ImageUpload;
