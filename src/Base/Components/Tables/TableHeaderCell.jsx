import React from "react";
import { cva } from "class-variance-authority";
import TableCellActions from "./TableCellActions.jsx";
import HeaderTable from "./HeaderTable.jsx";

const cellstyles = cva(
    `flex py-lg px-xl w-full items-center gap-lg border-b-[1px] border-b-border-secondary bg-bg-secondary self-stretch `, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


const TableHeaderCell = ({ Text, Checkbox, title }) => {

    return (
        <div className={cellstyles({})}>
        
            {Checkbox && <TableCellActions checkbox={true} variant="checkbox" isToggle={false}/>}
            {Text && <HeaderTable label={title} isarrowSelectorVertical={true}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;