import React, { forwardRef } from "react";
import TooltipPagination from "./tooltipPagination.jsx";

const TooltipPaginationWrapper = forwardRef(
  ({ children: _children, variant, size: _size, disabled: _disabled, isError: _isError, ..._props }, _ref) => {
    return (
      <div className="flex pt-0 pb-lg px-xl">
        {variant === "dot" && <TooltipPagination variant="dot" />}
        {variant === "text" && <TooltipPagination variant="text" />}
            <div className="flex justify-end items-center gap-lg flex-1">
                <button className="flex py-md px-lg justify-center items-center gap-xs rounded-md border-px border-solid bg-bg-primary border-border-primary">Skip</button>
                <button className="flex py-md px-lg justify-center items-center gap-xs bg-bg-brand-solid border-[2px] border-solid border-[#FFF]">Next</button>
            </div>
            
      </div>
    );
  }
);
TooltipPaginationWrapper.displayName = "TooltipPaginationWrapper";

export default TooltipPaginationWrapper;
