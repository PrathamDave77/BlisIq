import React from "react";
import { cva } from "class-variance-authority";
<<<<<<< HEAD
import { cn } from '../../../lib/utils.js';
import TableCellActions from './TableCellActions.jsx';
import HeaderTable from './HeaderTable.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
=======
import TableCellActions from "./TableCellActions.jsx";
import HeaderTable from "./HeaderTable.jsx";
>>>>>>> b9025fea184a9a18e2a7baf63393c4e864645098

const cellstyles = cva(
    `flex py-lg px-xl w-full h-full items-center gap-lg border-b-[1px] border-b-border-secondary bg-bg-secondary self-stretch `, 
    {
        variants:{
            variant:{
                
            },
        }
    }
)
    


<<<<<<< HEAD
const TableHeaderCell = ({Text,isCheckbox,title,isarrowSelectorVertical}) => {
=======
const TableHeaderCell = ({ Text, Checkbox, title }) => {
>>>>>>> b9025fea184a9a18e2a7baf63393c4e864645098

    return (
        <div className={cellstyles({})}>
            {isCheckbox && <Checkbox variant size="md" indeterminate={false} text={false}/>}
            {Text && <HeaderTable label={title} isarrowSelectorVertical={isarrowSelectorVertical}/>}
        </div>
        
    );
        
}

export default TableHeaderCell;