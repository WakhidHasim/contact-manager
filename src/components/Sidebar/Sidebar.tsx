import React, { ReactElement } from 'react';

import { useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import {
    Box,
    Button,
    Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

type sidebarParams = {
    name: string;
    icon: ReactElement;
};

const sidebarContent: sidebarParams[] = [
    {
        name: 'Home',

        icon: <FaHome />,
    },
    {
        name: 'New Contact',
        icon: <FaPlusSquare />,
    },
    {
        name: 'Contcat Id',
        icon: <FaPhoneSquare />,
    },
];

const Sidebar = () => {
    const location = useLocation();

    const activeRoute = (routeName: string) => {
        return location.pathname === routeName ? 'active' : '';
    };

    return (
        <React.Fragment>
            {sidebarContent.map((content, index) => (
                <h1 key={index}>{content.name}</h1>
            ))}
        </React.Fragment>
    );
};

export default Sidebar;
