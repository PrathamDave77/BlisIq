import React from "react";
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';


const cellstyles = cva(
    `flex py-lg px-xl w-full h-full gap-lg bg-bg-secondary self-stretch rounded-md items-center`, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    



const TableHeaderCell = ({Text,isCheckbox,title,isarrowSelectorVertical,indeterminate,isCheck}) => {


    return (
        <div className={cellstyles({})}>
            {isCheckbox && <Checkbox variant size="md" indeterminate={indeterminate} ischeck={isCheck} isarrowSelectorVertical={isarrowSelectorVertical}/>}
            {Text && <HeaderTable label={title} isarrowSelectorVertical/>}
        </div>
        
    );
        
}

export default TableHeaderCell;