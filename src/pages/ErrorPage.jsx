import React from "react";

function ErrorPage() {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      <div className="flex h-[435px] w-[211px] gap-3 md:w-[432px] flex-col justify-center text-center items-center">
        <p className="md:text-[150px] text-[73px] text-[#F20000] font-black">Oops</p>
        <p className="md:text-[26px] text-[13px] font-black text-[#001F3F]">
          404-Page Not Found
        </p>
        <p className="font-meduim md:text-[16px] text-[8px] text-[#001F3F]">
          "Looks like you've found yourself on a lost page. " or "The page you
          requested was not found."
        </p>
        <button className="md:h-[40px] h-[23px] w-[133px] md:w-[222px] md:text-[16px] text-[9px] bg-[#001F3F] text-white">Return To Homepage</button>
      </div>
    </div>
  );
}

export default ErrorPage;
