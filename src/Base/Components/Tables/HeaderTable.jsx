import React from "react";
import { cn } from "../../../lib/utils.js";

const HeaderTable = ({ label, isarrowSelectorVertical }) => {
  return (
    <div className={cn("flex items-center gap-xs")}>
      <span className="font-semibold text-text-primary">{label}</span>
      {isarrowSelectorVertical && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
};

HeaderTable.displayName = "HeaderTable";

export default HeaderTable;
