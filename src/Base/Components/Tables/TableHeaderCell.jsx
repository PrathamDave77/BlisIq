import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import React from 'react';
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';

const cellstyles = cva(
    `flex flex-row py-lg px-xl items-center gap-lg border-b-[1px] border-b-border-secondary bg-bg-primary hover:bg-bg-secondary`, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


const TableHeaderCell = ({Text,Checkbox}) => {

    return (
        <div className={cellstyles({})}>
            {Checkbox && <TableCellActions checkbox = {true} variant="checkbox" isToggle={false}/>}
            {Text && <HeaderTable label="company" arrowDownIcon={true}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;