import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import Avatar from './Avatar.jsx';

const Avataradd = ({ variant, size,  }) => {
    return (
        <div className="flex -space-x-2">
            {Array.from({ length: count }).map((_, index) => (
                <Avatar 
                    key={index}
                    size={size}
                    isOnline={false}
                    className="ring-2 ring-white"
                />
            ))}
        </div>
    )
}

export default Avataradd;