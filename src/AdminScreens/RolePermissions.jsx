import React from 'react';
import { useState } from 'react';
import UpperNavigation from '../Base/Components/Navigation/UpperNavigation.jsx';
import Select from '../Base/Components/Input/Select.jsx';
import Breadcrumbs from '../Base/Components/Breadcrumbs.jsx';
import Avatar from '../Base/Components/Avatar/Avatar.jsx';
import Avataradd from '../Base/Components/Avatar/Avataradd.jsx';
import Button from '../Base/Components/Buttons/Button.jsx';
import SidebarMenu from '../Base/Components/Sidebar/SidebarMenu.jsx';
import Checkbox from '../Base/Components/Checkbox/Checkbox.jsx';
import { Edit_01, Plus, Trash } from '../Base/Creator/Icons/Icons.jsx';

const NAV_ITEMS = [
    { label: "Permissions", value: "all", count: 9 },
    { label: "Users", value: "active", count: 34 },
];

const CompanyAdmin = [
    {
        text: "View organization profile",
        Supportingtext: "View organization details and information.",
        isCheck: true,
    },
    {
        text: "Manage all organization settings",
        Supportingtext: "Create edit and update organization configuration.",
        isCheck: true,
    },
    {
        text: "Billing management",
        Supportingtext: "Manage subscriptions, payments, and billing details.",
        isCheck: true,
    },
    {
        text: "Manage all attributes",
        Supportingtext: "Create and modify system or user attributes.",
        isCheck: false,
    },
    {
        text: "Manage all roles",
        Supportingtext: "Create, edit and delete custom roles. Assign anyone to any role in this instance.",
        isCheck: true,
    },
    {
        text: "Assign users to a role",
        Supportingtext: "Assign users to a role in the allowlist.",
        isCheck: false,
    },
    {
        text: "Edit and manage self profile",
        Supportingtext: "Update personal account information and preferences.",
        isCheck: false,
    },
];

const UserGroups = [
    {
        text: "Manage all users",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "Add new users",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "Manage all groups",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "Edit own groups",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
];

const ContentManagement = [
    {
        text: "View all org. content",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "Edit any content",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "Create content",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
    {
        text: "View public content",
        Supportingtext: "Save my login details for next time.",
        isCheck: false,
    },
];

const Publishing = [
    {
        text: "Publish Own Course",
        Supportingtext: "Can publish courses created by the user",
        isCheck: false,
    },
    {
        text: "Publish Any Course",
        Supportingtext: "Can publish courses created by the user",
        isCheck: false,
    },
    {
        text: "Publish to My Org.",
        Supportingtext: "Make course visible internally",
        isCheck: false,
    },
    {
        text: "Publish Publicly",
        Supportingtext: "Make course visible on marketplace",
        isCheck: false,
    },
    {
        text: "Set Course pricing",
        Supportingtext: "Add pricing to public course",
        isCheck: false,
    },
    {
        text: "Edit Pricing",
        Supportingtext: "Change price of published course",
        isCheck: false,
    },
];

const Enrollment = [
    {
        text: "Assign own content",
        Supportingtext: "Can publish courses created by the user",
        isCheck: false,
    },
    {
        text: "Assign any content",
        Supportingtext: "Can publish courses created by others",
        isCheck: false,
    },
    {
        text: "Bulk purchasing",
        Supportingtext: "Make course visible on marketplace",
        isCheck: false,
    },
];

const RolePermissions = () => {
    const [currentTab, setCurrentTab] = useState("all");
    return (
        <div className="w-full gap-8 flex flex-col">
            {/*<SidebarMenu />*/}
            <div id="header-section" className="flex flex-col px-4xl items-start gap-3xl w-full self-stretch">
                <div id="page-header" className="flex flex-col items-start gap-xl self-stretch w-full">
                    <Breadcrumbs divider="Slash" items={[{ label: "Roles" }, { label: "Custom Role" },]} />
                    <div className="flex items-start gap-xl self-stretch w-full">
                        <div className="flex items-start gap-xl w-full justify-between">
                            <div className="flex flex-col gap-xxs">
                                <div className="self-stretch text-text-primary font-family-display text-(--display-xs) font-semibold leading-(--display-xs)">
                                    Class Teacher
                                </div>
                                <div className="self-stretch text-text-tertiary font-family-display text-md leading-(--leading-text-md)">
                                    Can manage, assign courses to the learners in the class group.
                                </div>
                                <div className="flex items-end gap-xl mt-3">
                                    <div className="flex flex-col items-start gap-xxs">
                                        <div className="text-text-tertiary font-family-body text-sm leading-(--leading-text-sm)">Created by</div>
                                        <div className="font-semibold">Pratham Dave</div>
                                    </div>
                                    <div id="divider" className="border border-border-secondary"></div>
                                    <div className="flex flex-col items-start gap-xxs">
                                        <div className="text-text-tertiary font-family-body text-sm leading-(--leading-text-sm)">Created on</div>
                                        <div className="font-semibold">Sep 9,2002</div>
                                    </div>
                                    <div id="divider" className="border border-border-secondary"></div>
                                    <div className="flex items-center gap-lg">
                                        <Avataradd size="xs" />
                                        <div className="text-text-tertiary font-family-body text-sm leading-(--leading-text-sm)">32 Users</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-lg">
                                <Button variant="secondary" size="md" iconLeft={<Plus />} children="Add user" />
                                <Button variant="secondary" size="md" iconLeft={<Edit_01 />} children="Edit" />
                                <Button variant="secondary" size="md" iconLeft={<Trash />} />
                            </div>
                        </div>
                        <div></div>
                       
                    </div>
                </div>
                <UpperNavigation
                    variant="underline"
                    items={NAV_ITEMS}
                    value={currentTab}
                    onChange={setCurrentTab}
                    className="w-auto"
                />
            </div>
            <div id="Section" className="flex flex-col px-4xl items-start gap-3xl self-stretch w-full">
                <div className="flex items-start gap-4xl self-stretch w-full">
                    {/* LEFT COLUMN */}
                    <div className="w-[280px] text-text-primary font-semibold">
                        Company Administration
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-lg flex-1">
                        {CompanyAdmin.map((item, index) => (

                            <Checkbox
                                key={index}
                                ischeck={item.isCheck}
                                indeterminate={false}
                                variant="isCheckbox"
                                text={item.text}
                                SupportingText={item.Supportingtext}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-px self-stretch border border-border-secondary w-full"></div>
                <div className="flex items-start gap-4xl self-stretch w-full">
                    {/* LEFT COLUMN */}
                    <div className="w-[280px] text-text-primary font-semibold">
                        Users and groups
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-lg flex-1">
                        {UserGroups.map((item, index) => (

                            <Checkbox
                                key={index}
                                ischeck={item.isCheck}
                                indeterminate={false}
                                variant="isCheckbox"
                                text={item.text}
                                SupportingText={item.Supportingtext}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-px self-stretch border border-border-secondary w-full"></div>
                <div className="flex items-start gap-4xl self-stretch w-full">
                    {/* LEFT COLUMN */}
                    <div className="w-[280px] text-text-primary font-semibold">
                        Content management
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-lg flex-1">
                        {ContentManagement.map((item, index) => (

                            <Checkbox
                                key={index}
                                ischeck={item.isCheck}
                                indeterminate={false}
                                variant="isCheckbox"
                                text={item.text}
                                SupportingText={item.Supportingtext}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-px self-stretch border border-border-secondary w-full"></div>
                <div className="flex items-start gap-4xl self-stretch w-full">
                    {/* LEFT COLUMN */}
                    <div className="w-[280px] text-text-primary font-semibold">
                        Publishing and marketplace
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-lg flex-1">
                        {Publishing.map((item, index) => (

                            <Checkbox
                                key={index}
                                ischeck={item.isCheck}
                                indeterminate={false}
                                variant="isCheckbox"
                                text={item.text}
                                SupportingText={item.Supportingtext}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-px self-stretch border border-border-secondary w-full"></div>
                <div className="flex items-start gap-4xl self-stretch w-full">
                    {/* LEFT COLUMN */}
                    <div className="w-[280px] text-text-primary font-semibold">
                        Assign and enrollment
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-lg flex-1">
                        {Enrollment.map((item, index) => (

                            <Checkbox
                                key={index}
                                ischeck={item.isCheck}
                                indeterminate={false}
                                variant="isCheckbox"
                                text={item.text}
                                SupportingText={item.Supportingtext}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RolePermissions
