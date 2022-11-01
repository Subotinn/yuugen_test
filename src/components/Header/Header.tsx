import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import { DashboardIcon, LogoIcon, CreateIcon } from '../../assets'
import { IIcon } from '../../assets/types';
import { useTranslation } from 'react-i18next';

type HeaderPage = {
    title: string,
    icon: React.FunctionComponent<IIcon>,
    linkTo: string,
};

const pages: HeaderPage[] = [
    {
        title: 'header.dashboard',
        icon: DashboardIcon,
        linkTo: '/'
    },
    {
        title: 'header.create',
        icon: CreateIcon,
        linkTo: '/create'
    }
];

const Header = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <AppBar position="static">
            <div style={{ width: '1440px', margin: '0 auto' }}>
                <Toolbar disableGutters style={{ height: '112px' }}>
                    <LogoIcon />

                    <Box className="ml-12" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '48px' }}>
                        {pages.map(({ title, icon: IconComponent, linkTo }: HeaderPage) => (
                            <Link to={linkTo} key={title}>
                                <Button
                                    sx={{ display: 'flex', color: theme.palette.grey[900],  }}
                                >
                                    <IconComponent className="mr-2.5" />
                                    {t(title)}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </div>
        </AppBar>
    );
}
export { Header };
