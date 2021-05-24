import React, { useState } from "react";
import SurveyBuilder from "../components/SurveyBuilder";
import AddCalendar from "./AddCalendar";

function Home() {
  const [survey, setSurvey] = useState(false);
  const [meeting, setMeeting] = useState(false);

  const Employees = [
    {
      id: 1,
      name: "EBERE",
      department: "Business Development",
      position: "Business Lead",
      location: "Dubia",
    },
    {
      id: 1,
      name: "David Lee",
      department: "Technical Lead",
      position: "Technical Lead",
      location: "Dubia",
    },
    {
      id: 1,
      name: "John Doe",
      department: "Business Development",
      position: "Media Lead",
      location: "Dubia",
    },
  ];

  const data = {
    labels: ["Red", "green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#2f8559", "#5ECDD4", "#F005CB"],
        hoverBackgroundColor: ["#083a6f", "#1d6469", "#92067c"],
      },
    ],
  };

  const Linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#2f8559",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#2f8559",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const closeSurvey = () => {
    setSurvey(false);
  };

  return (
    <>
      <main className="md:pl-12 set-bg">
        <div className="flex ">
          <div className="w-full ">
            <div className="flex items-center mt-10 lg:mt-0">
              <div className="w-8 h-1 bg-blue-700 rounded mr-0 hidden md:block"></div>
              <h4 className="bg-blue-700 md:bg-transparent text-white md:text-gray-700 font-normal md:font-semibold text-md md:text-xl tracking-wide uppercase md:normal-case py-2 px-6 rounded-r-lg">
                Employees
              </h4>
            </div>
            <br />

            <div className="w-11/12 bg-white flex rounded py-0 md:py-4 shadow-lg md:border-t-8 md:border-blue-700 mb-0 md:mb-20 m-auto md:m-0 rounded-t-3xl fade-in">
              <div className="w-full mb-6 px-8 py-6 relative">
                <>
                  {survey ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Create Survey
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setSurvey(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <SurveyBuilder closeSurvey={closeSurvey} />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setSurvey(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setSurvey(false)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : (
                    ""
                  )}
                  {meeting ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Create Meetings
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setMeeting(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <AddCalendar />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setMeeting(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setMeeting(false)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : (
                    ""
                  )}

                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 md:py-4 overflow-auto  mt-5 mb-10">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full w-11/12 leading-normal">
                        <thead className="flex w-full">
                          <tr className="flex w-full">
                            <th className="p-4 w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              S/N
                            </th>
                            <th className="p-4 w-1/2 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="p-4 w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Department
                            </th>
                            <th className="p-4 w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Position
                            </th>
                            <th className="p-4 w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">
                              Location
                            </th>
                            <th className="p-4 w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="flex flex-col items-center overflow-y-scroll w-full schedule-table">
                          {/* <tr > */}
                          {Employees.map((data) => {
                            return (
                              <tr className="flex w-full">
                                <td className="p-4 w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm text-gray-700">
                                  {data.id}
                                </td>
                                <td className="p-4 w-1/2 px-5 py-5 border-b border-gray-200 font-semibold bg-white text-xs md:text-sm text-gray-700">
                                  {data.name}
                                </td>
                                <td className="p-4 w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm text-gray-700">
                                  {data.department}
                                </td>
                                <td className="p-4 w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm text-gray-700">
                                  {data.position}
                                </td>
                                <td className="p-4 w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm text-gray-700">
                                  {data.location}
                                </td>
                                <td className="p-4 w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-xs md:text-sm text-green-600 font-bold text-right">
                                  <button
                                    onClick={() => {
                                      console.log("ebere");
                                      setMeeting(true);
                                    }}
                                    className="bg-green-800   py-1 rounded"
                                    style={{
                                      marginRight: "5px",
                                    }}
                                  >
                                    <img
                                      src="/img/calendar-interface-symbol-tool.svg"
                                      style={{
                                        width: "18px",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                        marginTop: "0px",
                                      }}
                                    />
                                  </button>
                                  <button
                                    onClick={() => {
                                      console.log("ebere");

                                      setSurvey(true);
                                    }}
                                    className="bg-green-800 py-1 px-2 rounded"
                                  >
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="visibility_24px">
                                        <path
                                          id="icon/action/visibility_24px"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.625 7.5C1.70625 4.75625 4.375 2.8125 7.5 2.8125C10.625 2.8125 13.2937 4.75625 14.375 7.5C13.2937 10.2438 10.625 12.1875 7.5 12.1875C4.375 12.1875 1.70625 10.2438 0.625 7.5ZM13.0125 7.5C11.9813 5.39375 9.86878 4.0625 7.50003 4.0625C5.13128 4.0625 3.01878 5.39375 1.98753 7.5C3.01878 9.60625 5.13128 10.9375 7.50003 10.9375C9.86878 10.9375 11.9813 9.60625 13.0125 7.5ZM7.5 5.9375C8.3625 5.9375 9.0625 6.6375 9.0625 7.5C9.0625 8.3625 8.3625 9.0625 7.5 9.0625C6.6375 9.0625 5.9375 8.3625 5.9375 7.5C5.9375 6.6375 6.6375 5.9375 7.5 5.9375ZM4.6875 7.5C4.6875 5.95 5.95 4.6875 7.5 4.6875C9.05 4.6875 10.3125 5.95 10.3125 7.5C10.3125 9.05 9.05 10.3125 7.5 10.3125C5.95 10.3125 4.6875 9.05 4.6875 7.5Z"
                                          fill="white"
                                        />
                                      </g>
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                          {/* </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
    </>
  );
}

export default Home;
