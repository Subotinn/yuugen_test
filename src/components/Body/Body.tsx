import * as React from 'react';

import { Box, useTheme } from '@mui/material';

const Body = () => {
    return (
        <Box className="mt-7 pl-8 pr-8 mx-auto" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8} maxWidth="1440px" marginX="auto">
            <Box gridColumn="span 6">

            </Box>
            <Box gridColumn="span 6">
               {/*<ReportList />*/}
            </Box>
        </Box>
    );
}
export { Body };
