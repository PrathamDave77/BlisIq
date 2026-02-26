import React from "react";
import { cn } from "../../../lib/utils.js";

const TableCellActions = ({ checkbox, variant, isToggle: _isToggle, Radio, Toggle }) => {
  return (
    <div className={cn("flex items-center gap-md")} data-variant={variant}>
      {checkbox && (
        <input type="checkbox" className="rounded border-border-secondary" aria-label="Select row" />
      )}
      {Radio && <span className="sr-only">{Toggle}</span>}
    </div>
  );
};

TableCellActions.displayName = "TableCellActions";

export default TableCellActions;
