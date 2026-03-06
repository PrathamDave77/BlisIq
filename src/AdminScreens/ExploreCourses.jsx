import React from 'react'
import Select from '../Base/Components/Input/Select.jsx';
import Pageheader from '../Base/Components/Pageheader.jsx';
import Card from '../../public/card.jpg';
import {
    Cardheader,
    Sectionheader,
} from "../Base/Components/Navigation/Cardheader.jsx";
import badges from '../Base/Components/Badges/badges.jsx';
import { Heart, Share } from '../Base/Creator/Icons/Icons.jsx';
import Button from '../Base/Components/Buttons/Button.jsx';

const Course = [
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
    {
        title: "Python for Machine Learning & Data Science Masterclass",
        img:Card,
        desc:"Master Python from basics to advanced concepts with real projects, OOP, automation, and practical coding skills.",
        createdby:"Pratham Dave",
        price:"$499",
        discount:50,
        

    },
];

const ExploreCourses = () => {
    return (
        <div id="main" className="flex pt-4xl pb-6xl flex-col items-stretch gap-8 bg-bg-primary w-full">
            <div id="header-section" className="flex px-4xl flex-col items-stretch gap-3xl self-stretch w-full">
                <Pageheader title="Explore courses" isSupportingText="Discover thousands of courses to start learning something new today" />
                <Select placeholder="Search for course, quiz, assignment, learning path and more..." size="sm" searchable />
            </div>
            <div id="section" className="flex px-4xl flex-col items-start gap-3xl self-stretch">
                <Sectionheader title="Showing results" badge="596" />
                <div id="Card-Components" className="flex flex-col justify-center items-start gap-6xl self-stretch ">
                    <div className="flex items-start content-start gap-y-5xl gap-x-3xl self-stretch flex-wrap">
                        {Course.map(item => <div className="flex min-w-[320px] flex-col items-start flex-1 ">
                            <div id="Image-Container" className="self-stretch">
                                <img src={item.img} alt="This is an image!" className="rounded bg-[url(${Card})] bg-gray-200 bg-center bg-cover bg-no-repeat"></img>
                                <badges size="sm" variant="Badge" badgecolor color="grey" />
                            </div>
                            <div id="content" className="flex p-xl flex-col items-start gap-lg self-stretch">
                                <div className="flex justfy-between items-center self-stretch">
                                    <div className="flex items-center gap-md">
                                        <div className="flex items-center gap-sm">
                                            <div className="line-clamp-1 overflow-hidden text-ellipsis text-lg font-semibold text-text-primary font-family-body leading-(--leading-text-lg)">{item.price}</div>
                                            <div className="line-clamp-1 overflow-hidden text-ellipsis text-[18px] leading-(--leading-text-lg) font-normal font-family-body text-text-disabled line-through">{item.price * 2}</div>
                                        </div>
                                        <badges size="sm" variant="Badge" badgecolor color="warning" label="50% off"/>
                                    </div>
                                    <div className="flex items-center gap-md">
                                        <div className="flex items-center gap-2">
                                            <div className="flex p-sm items-center gap-md rounded-sm">
                                                <Share />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex p-sm items-center gap-md rounded-sm">
                                                <Heart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-sm self-stretch ">
                                    <div className="line-clamp-1 overflow-hidden text-ellipsis self-stretch text-text-quaternary text-sm leading-sm font-medium font-family-body ">{item.createdby}</div>
                                    <div className="line-clamp-2 self-stretch overflow-hidden text-ellipsis text-text-primary text-lg leading-lg font-family-body font-semibold">{item.title}</div>
                                </div>
                                <div className="line-clamp-1 self-stretch overflow-hidden text-ellipsis text-text-tertiary text-md leading-md font-normal font-family-body">{item.desc}</div>
                                <div className="flex items-center gap-sm opacity-80 ">
                                    <badges size="md" variant="Badge" badgeColor color="grey" isIcon label="4.6 (234)" />
                                    <badges size="md" variant="Badge" badgeColor color="grey" label="English" />
                                    <badges size="md" variant="Badge" badgeColor color="grey" label="Beginner" />
                                </div>
                            </div>
                        </div>)}
                    </div>
                    {/*<Pagenation />*/}
                </div>
            </div>
        </div>
    )
}

export default ExploreCourses
