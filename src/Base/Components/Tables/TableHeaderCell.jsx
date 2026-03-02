import React from "react";
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

const cellstyles = cva(
    `flex py-lg px-xl w-full h-[44px] items-center gap-lg border-b-[1px] border-b-border-secondary bg-bg-secondary self-stretch `, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


const TableHeaderCell = ({Text,isCheckbox,title,isarrowSelectorVertical}) => {

    return (
        <div className={cellstyles({})}>
            {isCheckbox && <Checkbox variant size="md" indeterminate={false} text={false}/>}
            {Text && <HeaderTable label={title} isarrowSelectorVertical={isarrowSelectorVertical}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;