import React from "react";

const PaypalFailed = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-5 bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <h1>Bạn đã hủy thanh toán</h1>
      </div>
    </div>
  );
};

export default PaypalFailed;
