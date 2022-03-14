import React from "react";
import { ReactComponent as Ellipis } from "./icon-ellipsis.svg";
import WorkImg from "./icon-work.svg";

const Tracker = (props) => {
  return (
    <div className=" relative overflow-hidden rounded-2xl bg-lightredwork pt-8 text-white shadow-sm shadow-neutralblue-300 duration-500 hover:pt-10">
      <img src={WorkImg} alt="" className="absolute -top-3 right-6 " />
      <div className="relative flex cursor-pointer flex-col gap-[0.375rem] bg-neutralblue-300 py-7 px-6 duration-150 hover:bg-neutralblue-500">
        <div className="col-span-2 flex  items-center justify-between font-medium leading-5 ">
          <div>{props.content.title}</div>
          <Ellipis className="cursor-pointer fill-neutralblue-700 hover:fill-white " />
        </div>
        <div className="flex items-center justify-between">
          <div className="inline-block text-[2rem] font-light leading-9">
            {
              {
                daily: props.content.timeframes.daily.current,
                weekly: props.content.timeframes.weekly.current,
                monthly: props.content.timeframes.monthly.current,
              }[props.timeframe]
            }
            hrs
          </div>
          <div className="inline-block  text-right text-neutralblue-700">
            Previous -{" "}
            {
              {
                daily: props.content.timeframes.daily.previous,
                weekly: props.content.timeframes.weekly.previous,
                monthly: props.content.timeframes.monthly.previous,
              }[props.timeframe]
            }
            hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;

{
  /* Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly --> */
}
