import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
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
      {Header==="Normal" && Iconleading && <><Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Logout</Dropdownlistitem></> || Header==="Normal" && Checkboxleading && <><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Logout</Dropdownlistitem></> || 

       Header==="Header" && <><Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Account Menu</Dropdownlistitem>
        <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
        <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Logout</Dropdownlistitem></> || 

      Header==="Avatar" && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="false" Isdivider="false">Logout</Dropdownlistitem></> || 
    
        Header==="Avatar" && Iconleading && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="false" Isdivider="false">Logout</Dropdownlistitem></> ||

        Header==="Avatar" && Checkboxleading && <><Dropdownlistheader /><Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">View profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="true" Checkboxleading="true" Isdivider="false">Settings</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Keyboard shortcuts</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Company Profile</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Team members</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Invite Colleagues</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Changelog</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Slack Community</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Support</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Api</Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="true"></Dropdownlistitem>
      <Dropdownlistitem Iconleading="false" Checkboxleading="true" Isdivider="false">Logout</Dropdownlistitem></>
    }
    
    </div>
  )
}



export default Dropdownmenu
