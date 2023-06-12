import React from "react";

function Footer() {
  return (
    <footer>
      <div className="mt-[50px]">
        <div className="flex px-[40px] justify-center">
          <div>
            <p className="text-center text-[20px] font-bold md:text[18px] sm:flex-col  ">
              {" "}
              Always at your service
            </p>
            <div
              className="flex gap-[10px] px-[40px] py-1 mt-[30px] text-[20px] border-2 rounded-lg sm:flex-col
             content-centre"
            >
              <p>+234 905 5092 3116</p>
              <p>mariamatoyegbe@gmail.com</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[40px] mt-[20px]">
          <p>LOGO</p>
          <p>© 2023 logo. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
