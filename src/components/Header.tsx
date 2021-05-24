import React from "react";

function Header(props: any) {
  // if (!user) {
  //   return (
  //     <>
  //       {/* <div className="w-11/12 bg-white rounded py-12 shadow-lg m-auto px-8 relative mt-20">
  //             <img
  //             src="/img/loading-gif.gif"
  //             alt=""
  //             className="w-1/8 m-auto py-10"
  //             />
  //             <h6 className="m-auto text-lg text-gray-700 text-center">Preparing your acoount...</h6>
  //         </div> */}
  //     </>
  //   );
  // }

  return (
    <div>
      {/* desktop view */}
      <header className="hidden lg:flex lg:justify-between lg:bg-white lg:pt-3 lg:pb-3 lg:pl-12 lg:shadow-sm">
        <div className="">
          <h1 className="text-gray-700 text-md font-semibold pt-2">
            KnackLab
            {/* -{" "} */}
            {/* <span className="text-green-700">Shoprite Nigeria</span> */}
          </h1>
        </div>
        <div className="flex items-center mr-16">
          <h4 className="text-gray-700 text-md font-base mr-5">Hello, </h4>
          {/* <img src="/img/Notification-icon.svg" alt="" /> */}
        </div>
      </header>
      <br className="hidden lg:inline" />
      <br className="hidden lg:inline" />

      {/* mobile view */}
      <header className="flex justify-start pl-8 lg:hidden">
        <button
          className="h-12 w-12 focus:outline-none"
          onClick={() => props.navBar()}
        >
          <img src="/img/hamburger-menu.svg" alt="" />
        </button>
        <img src="/img/knack.svg" className="w-16 ml-24" alt="" />
      </header>
    </div>
  );
}

export default Header;
