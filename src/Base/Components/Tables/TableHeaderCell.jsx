import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import React from 'react';
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';

const cellstyles = cva(
    `flex flex-row py-lg px-xl w-full items-center gap-lg border-b-[1px] border-b-border-secondary bg-[var(--color-gray-50)] hover:bg-bg-secondary `, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


const TableHeaderCell = ({Text,Checkbox,title}) => {

    return (
        <div className={cellstyles({})}>
            {Checkbox && <TableCellActions checkbox = {true} variant="checkbox" isToggle={false}/>}
            {Text && <HeaderTable label={title} arrowDownIcon={false}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;