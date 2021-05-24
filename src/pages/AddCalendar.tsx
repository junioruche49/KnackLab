import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddCalendar = (props: any) => {
  return (
    <>
      <div className="md:w-7/12 w-full mb-6 px-8 relative">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Meeting Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="first_name"
              />
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Meeting Date
              </label>
              <ReactDatePicker
                dateFormat="yyyy-mm-dd"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCalendar;
