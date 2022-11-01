import * as React from 'react';

import { Button, Card, CardActions, CardContent, Typography, useTheme } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import Box from '@mui/material/Box';
import { format } from 'date-fns';

export type ReportCardProps = {
    title: string,
    department: string,
    lastDate: string,
    data: any
};

const ReportCard = ({
    title,
    department,
    lastDate,
    data
}: ReportCardProps) => {
    const theme = useTheme();

    return (
        <Card sx={{ width: 212, border: '1px solid #ccc' }}>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} fontWeight={300} color="grey.500" gutterBottom>{department}</Typography>
                <Typography sx={{ fontSize: 14 }} fontWeight={500} color="grey.700" gutterBottom component="div">
                    {title}
                </Typography>
                <Box display="flex" gap="14px" className="mt-6">
                    <PieChart
                        data={[{ value: data.overdue, color: theme.palette.warning[600] }]}
                        totalValue={data.total}
                        rounded
                        lineWidth={20}
                        label={({ dataEntry }) => `${dataEntry.value}/${data.total}`}
                        labelStyle={{
                            fontSize: '16px',
                            fill: theme.palette.grey[900],
                            fontWeight: 900,
                        }}
                        labelPosition={0}
                        background={theme.palette.warning[100]}
                    />
                    <PieChart
                        data={[{ value: data.finished, key: 1, color: theme.palette.success[600] }]}
                        totalValue={data.total}
                        label={({ dataEntry }) => `${dataEntry.value}/${data.total}`}
                        labelStyle={{
                            fontSize: '16px',
                            fill: theme.palette.grey[900],
                            fontWeight: 900,
                        }}
                        labelPosition={0}
                        lineWidth={20}
                        background={theme.palette.success[100]}
                        rounded
                        animate
                    />
                </Box>
                <Box className="mt-6">
                    <Typography sx={{ fontSize: 12 }} fontWeight={500} color="grey.500" gutterBottom>Latest date</Typography>
                    <Typography sx={{ fontSize: 14 }} fontWeight={500} color="grey.700" gutterBottom component="div">
                        {format(new Date(lastDate), 'd MMM yy')}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
export { ReportCard };
