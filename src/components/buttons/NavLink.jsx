'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({href, children}) => {

        const path = usePathname();
        const isActive = path === href;
    return (
        <Link  href={href} className={`${isActive ? 'text-secondary' : ''} font-medium `}>
            {children}
        </Link>
    );
};

export default NavLink;