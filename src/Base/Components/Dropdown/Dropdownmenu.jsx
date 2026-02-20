import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../Base/lib/utils.js";
import Dropdownlistitem from './Dropdownlistitem.jsx';
import Dropdownlistheader from './Dropdownlistheader.jsx';

const styles = cva("flex flex-col items-start rounded-md border border-border-secondary bg-bg-primary shadow-lg",{
    variants:{
        variant:{
            
        },
        size:{},
    },

});

const Dropdownmenu = ({Header,Iconleading,Checkboxleading}) => {
  return (
    <div className={cn(styles({}))}>
      {Header==="Normal" && Iconleading && <><Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Logout"/></> || Header==="Normal" && Checkboxleading && <><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="Logout"/></> || 

       Header==="Header" && <><Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Account Menu"/>
        <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
        <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Logout"/></> || 

      Header==="Avatar" && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false" children="Logout"/></> || 
    
        Header==="Avatar" && Iconleading && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false" children="Logout"/></> ||

        Header==="Avatar" && Checkbox && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false" children="View profile"/>
      <Dropdownlistitem Iconleading="true" Checkboxloadin="true" Isdivider="false" children="Settings"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Keyboard shortcuts"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Company Profile"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Team members"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Invite Colleagues"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Changelog"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Slack Community"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Support"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Api"/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="true" children=""/>
      <Dropdownlistitem Iconleading="false" Checkboxloadin="true" Isdivider="false" children="Logout"/></>
    }
    
    </div>
  )
}



export default Dropdownmenu
