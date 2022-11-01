import * as React from 'react';

import { useTheme } from '@mui/material';

import { LogoIcon } from '../../assets'

const Logo = () => {
    const theme = useTheme();

    return (
            <div style={{ width: '112px', height: '112px' }}>
                <LogoIcon />
            </div>
    );
}
export { Logo };
