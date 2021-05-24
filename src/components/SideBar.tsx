import React, { useCallback, useEffect } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { CSSTransition, Transition } from "react-transition-group";
import { Confirm } from "react-st-modal";

function SideBar(props: any) {
  useEffect(() => {
    // console.log(props.navValue);
  }, [props.navValue]);

  const history = useHistory();

  const NavigationLinks = [
    {
      to: "/",
      name: "Employees",
      icon: "/img/overview-icon.svg",
      exact: true,
    },
  ];

  const _logout = async () => {
    const isConfirm = await Confirm(
      "Are you sure you want to logout?",
      "Logout"
    );

    if (isConfirm) {
      history.replace("/");
    }
  };

  const goToOnboarding = () => {
    props.navSideBarToggle();
    props.history.push("/new-loan-request");
  };

  return (
    <div
      style={{
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      }}
      ref={props.refData}
      className={
        props.navValue
          ? " w-8/12 sm:w-6/12 fixed left-0 bg-white h-screen border-r z-40 pt-6"
          : "hidden  lg:w-3/12 pt-12 border-r bg-white h-auto relative lg:inline"
      }
    >
      <div className="flex justify-center mb-4 lg:mb-20">
        <img src="/img/knack.svg" className="w-64" alt="" />
      </div>
      <div className="w-full mb-8 lg:mb-16 m-auto text-center"></div>
      <div className="w-11/12 ml-auto lg:mb-24">
        {NavigationLinks.map((key, id) => {
          return (
            <NavigationLink
              key={id}
              to={key.to}
              name={key.name}
              icon={key.icon}
              exact={key.exact}
              navAction={props.navSideBarToggle}
            />
          );
        })}
      </div>
      <br />
      <div className=" bottom-0 border-t">
        <div className="w-11/12 ml-auto mt-8">
          <NavLink
            onClick={() => props.navSideBarToggle()}
            to=""
            className="flex p-4 items-center rounded-tl-lg rounded-bl-lg mb-1"
          >
            <img src="/img/web-icon.svg" className="ml-3 w-5 h-5" alt="" />
            <span className="text-gray-700 ml-6 lg:text-sm xl:text-lg font-light">
              Visit Website
            </span>
          </NavLink>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default withRouter(SideBar);
