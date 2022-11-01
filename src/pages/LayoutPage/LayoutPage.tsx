import * as React from 'react';

import { Color, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';

declare module '@mui/material/styles' {
    interface PaletteColor extends Color {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#1D2939',
        },
        secondary: {
            light: '#0066ff',
            main: '#cccccc',
            contrastText: '#ffcc00',
        },
        background: {
            default: '#E4E7EC'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        grey: {
            50: '#F9FAFB',
            100: '#F2F4F7',
            200: '#E4E7EC',
            300: '#D0D5DD',
            400: '#98A2B3',
            500: '#667085',
            600: '#475467',
            700: '#344054',
            800: '#1D2939',
            900: '#101B28',
        },
        success: {
            50: '#ECFDF3',
            100: '#D1FADF',
            200: '#A6F4C5',
            300: '#6CE9A6',
            400: '#32D583',
            500: '#12B76A',
            600: '#039855',
            700: '#027A48',
            800: '#05603A',
            900: '#054F31',
        },
        warning: {
            50: '#FFFAEB',
            100: '#FEF0C7',
            200: '#FEDF89',
            300: '#FEC84B',
            400: '#FDB022',
            500: '#F79009',
            600: '#DC6803',
            700: '#B54708',
            800: '#93370D',
            900: '#7A2E0E',
        },
        error: {
            50: '#FEF3F2',
            100: '#FEE4E2',
            200: '#FECDCA',
            300: '#FDA29B',
            400: '#F97066',
            500: '#F04438',
            600: '#D92D20',
            700: '#B42318',
            800: '#912018',
            900: '#7A271A',
        }
    },
    typography: {
        fontFamily: 'Poppins',
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#ffffff'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: '#BCC8BC',
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: 'transparent',
                        width: '4px'
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: '#BCC8BC',
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: '#BCC8BC',
                    },
                    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                        backgroundColor: '#BCC8BC',
                    },
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#BCC8BC',
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: '#BCC8BC',
                    },
                },
            },
        },
    },
});


const LayoutPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Header />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}
export { LayoutPage };
