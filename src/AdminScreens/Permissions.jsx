import React from 'react';
import { useState } from 'react';
import UpperNavigation from '../Base/Components/Navigation/UpperNavigation.jsx';
import Select from '../Base/Components/Input/Select.jsx';
import Breadcrumbs from '../Base/Components/Breadcrumbs.jsx';
import Avatar from '../Base/Components/Avatar/Avatar.jsx';
import Avataradd from '../Base/Components/Avatar/Avataradd.jsx';
import Button from '../Base/Components/Buttons/Button.jsx';
import Checkbox from '../Base/Components/Checkbox/Checkbox.jsx';
import { Edit_01, Plus, Trash } from '../Base/Creator/Icons/Icons.jsx';
import { Sectionheader } from '../Base/Components/Navigation/Cardheader.jsx';
import TableHeaderCell from '../Base/Components/Tables/TableHeaderCell.jsx';
import TableCell from '../Base/Components/Tables/TableCell.jsx';

const Permissionlist = [
    {
        Permission: "View organization profile",
        Category: "Company Administration",
        Admin: true,
        Groupadmin: true,
        Creator: true,
        Learner: true,
        Classteacher: true,
    },
    {
        Permission: "View organization profile",
        Category: "Company Administration",
        Admin: true,
        Groupadmin: true,
        Creator: true,
        Learner: true,
        Classteacher: true,
    },
    {
        Permission: "View organization profile",
        Category: "Company Administration",
        Admin: true,
        Groupadmin: true,
        Creator: true,
        Learner: true,
        Classteacher: true,
    },
    {
        Permission: "View organization profile",
        Category: "Company Administration",
        Admin: true,
        Groupadmin: true,
        Creator: true,
        Learner: true,
        Classteacher: true,
    },
    {
        Permission: "View organization profile",
        Category: "Company Administration",
        Admin: true,
        Groupadmin: true,
        Creator: true,
        Learner: true,
        Classteacher: true,
    },
];
const navigationItems = [
    { label: "Roles", value: "Roles" },
    { label: "Permissions", value: "Permissions" },
];

const HeaderList = [
    {
        title: "Permissions",
    }, {
        title: "Category",
    }, {
        title: "Admin",
    }, {
        title: "Group Admin",
    }, {
        title: "Creator",
    }, {
        title: "Learner",
    }, {
        title: "Class teacher",
    },
];


const Permissions = () => {
    const [currentTab, setCurrentTab] = useState("all");
    return (
        <div className="w-full gap-8 flex flex-col items-end pt-4xl pb-6xl">
            <div id="header-section" className="flex flex-col px-4xl items-start gap-3xl w-full self-stretch">
                <div id="page-header" className="flex flex-col items-start gap-xl self-stretch w-full">
                    <div className="flex items-start gap-xl self-stretch w-full">
                        <div className="flex items-start gap-xl w-full justify-between">
                            <div className="flex flex-col gap-xxs">
                                <div className="self-stretch text-text-primary font-family-display text-(--display-xs) font-semibold leading-(--display-xs)">
                                    Role Management
                                </div>
                                <div className="self-stretch text-text-tertiary font-family-display text-md leading-(--leading-text-md)">
                                    Edit role permissions, create new roles and set a default for new user
                                </div>

                            </div>

                        </div>
                        <div></div>

                    </div>
                </div>
                <UpperNavigation
                    variant="underline"
                    items={navigationItems}
                    value={currentTab}
                    onChange={setCurrentTab}
                    className="w-full"
                />
            </div>
            <div id="Section" className="flex flex-col px-4xl items-start gap-3xl self-stretch w-full">
                <Sectionheader title="Permissions" badge variant searchable />
                <div className="flex items-start self-stretch w-full">
                    <table className="w-full">
                        <thead>
                            <tr>
                                {HeaderList.map((item, index) => (
                                    <th key={index}>
                                        <TableHeaderCell Text title={item.title} />
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Permissionlist.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <TableCell isdefault size="md" username={item.Permission} />
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" username={item.Category} />
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" isCheck={item.Admin}/>
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" isCheck={item.Groupadmin} />
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" isCheck={item.Creator} />
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" isCheck={item.Learner} />
                                    </td>
                                    <td>
                                        <TableCell isdefault size="md" isCheck={item.Classteacher} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Permissions
