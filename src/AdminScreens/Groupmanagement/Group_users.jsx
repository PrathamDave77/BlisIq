import React from 'react'
import Breadcrumbs from '../../Base/Components/Breadcrumbs.jsx';
import AvatarProfilePicture from '../../Base/Components/Avatar/AvatarProfilePicture.jsx';
import C2_icon from '../../../public/C2_icon.png';
import Ellipse from '../../../public/Ellipse.png';

const Group_users = () => {
    return (
        <div id="main" className="flex flex-col items-end gap-8 pt-4xl pb-6xl bg-bg-primary w-full h-full">
            <div id="Header-Section" className="flex flex-col px-4xl gap-3xl self-stretch w-full h-full">
                <Breadcrumbs items={[{ label: "Groups" }, { label: "Class 2nd" },]} />
                <div id="Content" className="flex items-start gap-xl self-stretch w-full h-full">
                    <div id="Content" className="flex flex-col items-start gap-xl flex-1 w-full h-full">
                        <div id="Content" className="flex items-center gap-xl self-stretch w-full h-full">
                            <AvatarProfilePicture size="sm" variant="Text" Verified={false} Icon={Ellipse}/>
                            <div className="flex flex-col items-start gap-xxs w-full h-full">
                                <div id="Text" className="self-stretch font-family-display text-display-xs font-semibold leading-display-xs ">Class 2nd</div>
                                <div className="self-stretch text-text-tertiary font-family-body text-md font-normal leading-md">Class 2nd students delhi public school</div>
                            </div>

                        </div>
                        <div id="Content"></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="Section" className="flex flex-col items-start gap-3xl self-stretch">

            </div>
        </div>
    )
}

export default Group_users
