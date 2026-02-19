import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const actions = cva(`flex items-center gap-[8px] `, {
  variants: {
    variant: {
      checkbox: "",
    },
    Radio:
      "inline-flex rounded-[10px] border border-solid border-border-primary",
    Toggle: "flex flex-col items-start ",
  },
});

const TableCellActions = ({ variant, isToggle }) => {
  return (
    <>
      {isToggle === true ? (
        <div className={actions({ variant })}>
          <div className="flex flex-end p-xxs justify-end items-center rounded-full bg-bg-brand-solid ">
            <button className="shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g filter="url(#filter0_dd_32998_2842)">
                  <circle cx="11" cy="10" r="8" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_32998_2842"
                    x="0"
                    y="0"
                    width="22"
                    height="22"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="1"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_32998_2842"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_32998_2842"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_32998_2842"
                      result="effect2_dropShadow_32998_2842"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_32998_2842"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className={cn(actions())}>
          <div className="flex items-center gap-[8px] rounded-[6px] w-5 h-5 border border-solid border-border-primary"></div>
        </div>
      )}
    </>
  );
};

export default TableCellActions;
