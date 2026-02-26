
import React from 'react';
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

const cellstyles = cva(
    `flex py-lg px-xl w-full items-center gap-lg border-b-[1px] border-b-border-secondary bg-bg-secondary self-stretch `, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


const TableHeaderCell = ({Text,isCheckbox,title}) => {

    return (
        <div className={cellstyles({})}>
        
            {Checkbox && <Checkbox ischeck={false} size="md" indeterminate={true} variant="isCheckbox" />}
            {Text && <HeaderTable label={title} isarrowSelectorVertical={true}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;