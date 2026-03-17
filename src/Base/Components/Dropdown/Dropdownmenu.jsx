import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Dropdownlistitem from './Dropdownlistitem.jsx';
import Dropdownlistheader from './Dropdownlistheader.jsx';

const styles = cva("flex flex-col items-start rounded-md border border-border-secondary bg-bg-primary shadow-lg", {
  variants: {
    variant: {

    },
    size: {},
  },

});

const Dropdownmenu = ({ Header, Iconleading, Checkboxleading, isDetached, List }) => {
  return (
    <div className={cn(styles({}),"min-w-[220px]")}>
      {isDetached && <>
        {List.map(item => <Dropdownlistitem Label={item.label} Iconleading={item.Iconleading} Checkboxleading={item.Checkboxleading} Header={Header} Isdivider={item.Isdivider} isIcon={item.Icon}/>)}
      </>}
      {Header === "Normal" && Iconleading && <><Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>View profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Settings</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Company Profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Team members</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Changelog</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Slack Community</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Support</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Api</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Logout</Dropdownlistitem></>}
      {Header === "Normal" && Checkboxleading && <><Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>View profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Settings</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Company Profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Team members</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Changelog</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Slack Community</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Support</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Api</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Logout</Dropdownlistitem></>}

      {Header === "Header" && <><Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Account Menu</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>View profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Settings</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Company Profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Team members</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Changelog</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Slack Community</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Support</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Api</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Chevron={true}>Logout</Dropdownlistitem></>}

      {Header === "Avatar" && Iconleading ? <><Dropdownlistheader /><Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>View profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Settings</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={true} Shortcut={false} Chevron={false}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Company Profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Team members</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true} Shortcut={false} Chevron={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Changelog</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Slack Community</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Support</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Api</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={true} Shortcut={false}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={false} Isdivider={false} Shortcut={false} Chevron={true}>Logout</Dropdownlistitem></> : Header === "Avatar" && <><Dropdownlistheader /><Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>View profile</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Settings</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={true} Chevron={true}></Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Company Profile</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Team members</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Changelog</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Slack Community</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Support</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Api</Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={true}></Dropdownlistitem>
          <Dropdownlistitem Iconleading={false} Checkboxleading={false} Isdivider={false} Chevron={true}>Logout</Dropdownlistitem></>

      }
      {Header === "Avatar" && Checkboxleading && <><Dropdownlistheader /><Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>View profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={true} Checkboxleading={true} Isdivider={false} Chevron={true}>Settings</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Keyboard shortcuts</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Company Profile</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Team members</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Invite Colleagues</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Changelog</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Slack Community</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Support</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Api</Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={true}></Dropdownlistitem>
        <Dropdownlistitem Iconleading={false} Checkboxleading={true} Isdivider={false} Chevron={true}>Logout</Dropdownlistitem></>
      }

    </div>
  )
}



export default Dropdownmenu
