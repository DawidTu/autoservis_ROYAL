'use client';

import {
    RiInstagramFill,
    RiFacebookFill,
} from 'react-icons/ri';
import Link from 'next/link';

const icons = [
    {
        path: 'https://www.facebook.com/dejvidtuma',
        name: <RiFacebookFill/>,
    },
    {
        path: 'https://www.instagram.com/_david_tuma',
        name: <RiInstagramFill/>,
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
            <Link href={icon.path} target='_blank' key={index}>
                <div className={`${iconStyles}`}>{icon.name}</div>
            </Link>
            );
        })}
    </div>
  );
};

export default Socials