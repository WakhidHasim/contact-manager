import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { NavLink, useLocation } from 'react-router-dom';

type Route = {
    layout: string;
    path: string;
    name: string;
    redirect?: boolean;
    category?: boolean;
    state?: string;
    rtlName?: string;
    icon?: string | React.ReactElement;
    views?: Route[];
};

type SidebarContentProps = {
    logoText: string;
    routes: Route[];
};

const SidebarContent: React.FC<SidebarContentProps> = ({
    logoText,
    routes,
}) => {
    const location = useLocation();
    const [state, setState] = useState<Record<string, boolean>>({});

    const activeRoute = (routeName: string) => {
        return location.pathname === routeName ? 'active' : '';
    };

    const createLinks = (routes: Route[]) => {
        const activeBg = useColorModeValue('white', 'gray.700');
        const inactiveBg = useColorModeValue('white', 'gray.700');
        const activeColor = useColorModeValue('gray.700', 'white');
        const inactiveColor = useColorModeValue('gray.400', 'gray.400');

        return routes.map((prop, key) => {
            if (prop.redirect) {
                return null;
            }
            if (prop.category) {
                const st: Record<string, boolean> = {};
                st[prop.state as string] = !state[prop.state as string];
                return (
                    <div key={prop.name}>
                        <Text
                            color={activeColor}
                            fontWeight='bold'
                            mb={{
                                xl: '12px',
                            }}
                            mx='auto'
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            py='12px'
                        >
                            {document.documentElement.dir === 'rtl'
                                ? prop.rtlName
                                : prop.name}
                        </Text>
                        {createLinks(prop.views as Route[])}
                    </div>
                );
            }
            return (
                <NavLink to={prop.layout + prop.path} key={prop.name}>
                    {activeRoute(prop.layout + prop.path) === 'active' ? (
                        <Button
                            boxSize='initial'
                            justifyContent='flex-start'
                            alignItems='center'
                            bg={activeBg}
                            mb={{
                                xl: '12px',
                            }}
                            mx={{
                                xl: 'auto',
                            }}
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            py='12px'
                            borderRadius='15px'
                            _hover='none'
                            w='100%'
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
                        >
                            <Flex>
                                {typeof prop.icon === 'string' ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg='teal.300'
                                        color='white'
                                        h='30px'
                                        w='30px'
                                        me='12px'
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text
                                    color={activeColor}
                                    my='auto'
                                    fontSize='sm'
                                >
                                    {document.documentElement.dir === 'rtl'
                                        ? prop.rtlName
                                        : prop.name}
                                </Text>
                            </Flex>
                        </Button>
                    ) : (
                        <Button
                            boxSize='initial'
                            justifyContent='flex-start'
                            alignItems='center'
                            bg='transparent'
                            mb={{
                                xl: '12px',
                            }}
                            mx={{
                                xl: 'auto',
                            }}
                            py='12px'
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            borderRadius='15px'
                            _hover='none'
                            w='100%'
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
                        >
                            <Flex>
                                {typeof prop.icon === 'string' ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg={inactiveBg}
                                        color='teal.300'
                                        h='30px'
                                        w='30px'
                                        me='12px'
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text
                                    color={inactiveColor}
                                    my='auto'
                                    fontSize='sm'
                                >
                                    {document.documentElement.dir === 'rtl'
                                        ? prop.rtlName
                                        : prop.name}
                                </Text>
                            </Flex>
                        </Button>
                    )}
                </NavLink>
            );
        });
    };

    const links = <>{createLinks(routes)}</>;

    return (
        <>
            <Box pt='25px' mb='12px'>
                <Link
                    href={`${process.env.PUBLIC_URL}/#/`}
                    target='_blank'
                    display='flex'
                    lineHeight='100%'
                    mb='30px'
                    fontWeight='bold'
                    justifyContent='center'
                    alignItems='center'
                    fontSize='11px'
                >
            </Box>
            <Stack direction='column' mb='40px'>
                <Box>{links}</Box>
            </Stack>
        </>
    );
};

export default SidebarContent;
