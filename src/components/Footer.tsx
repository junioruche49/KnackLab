import React from "react";

function Footer() {
  return (
    <>
      {/* mobile view */}

      {/* desktop view */}
      <footer className="absolute bottom-0 w-full bg-white pt-3 pb-3 shadow-md">
        <div className="relative">
          <div className="flex justify-center">
            <p className="flex justify-center text-gray-700 text-sm font-light">
              {" "}
              KnackLab | Made with{" "}
              <img className="pl-3" src="/img/favorite-icon.svg" alt="" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
