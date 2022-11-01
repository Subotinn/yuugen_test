import * as React from 'react';

import { Box, Chip, Typography } from '@mui/material';
import useSWR from 'swr';
import { Wrapper } from '../../components/Wrapper';
import { TodoList } from '../../components/TodoList';
import { Column, DataItem } from './types';
import { endpoints, fetcher } from '../../api/api';
import { Label } from '../../components/Label';
import { STATUSES } from '../../constants';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { ReportCard } from '../../components/ReportCard';
import { useTranslation } from 'react-i18next';

const columns: Column[] = [
    {
        id: 'title',
        label: 'dashboard.column.invoice',
        minWidth: 170,
        format: (value: string) => <Typography fontSize='14px' fontWeight={500} color='grey.900'>{value}</Typography>,
    },
    {
        id: 'status',
        label: 'dashboard.column.status',
        minWidth: 100,
        format: (value: STATUSES) => <Label value={value} />,
    },
    {
        id: 'createdAt',
        label: 'dashboard.column.date',
        minWidth: 170,
        align: 'right',
        format: (value: string) => <Typography fontSize='14px' fontWeight={300} color='grey.500'>{format(new Date(value), 'd MMM yy')}</Typography>,
    },
];

const DashboardPage = () => {
    const { t } = useTranslation();
    const { data, error } = useSWR(endpoints.fetchAll, fetcher);
    const statusesList = Object.values(STATUSES);

    const filteredData = useMemo(() => {
        return (data || []).filter((i: DataItem) => statusesList.includes(i.status as STATUSES))
    }, [data, statusesList])

    const chartData = useMemo(() => {
        const finished = filteredData.filter((i: DataItem) => i.status === STATUSES.FINISHED).length
        const overdue = filteredData.filter((i: DataItem) => i.status === STATUSES.OVERDUE).length

        return {
            total: filteredData.length,
            finished,
            overdue,
        }
    }, [statusesList, filteredData]);

    const cardDate = useMemo(() => {
        return filteredData[filteredData.length - 1]?.createdAt || 0
    }, [statusesList, filteredData]);

    return (
        <Box className="mt-7 px-8 mx-auto" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8} maxWidth="1440px" marginX="auto">
            <Box gridColumn="span 6">
                <Wrapper className="p-5">
                    <Typography fontSize="18px" fontWeight={500} lineHeight="28px" color="grey.900">{(t('dashboard.my_todo'))} <Chip label={filteredData?.length || 0}/></Typography>
                    { (error || filteredData?.length === 0) ? (
                        <div>Empty data block!</div>
                    ) : (
                        <TodoList data={filteredData} columns={columns} />
                    )}
                </Wrapper>
            </Box>
            <Box gridColumn="span 6">
                <Wrapper className="p-5">
                    <Typography marginBottom={2} fontSize="18px" fontWeight={500} lineHeight="28px" color="grey.900">{(t('dashboard.report'))} <Chip label={4}/></Typography>
                    {(data && !!filteredData.length) && (
                        <ReportCard
                            department="IT department"
                            title="Internal governance & control"
                            data={chartData}
                            lastDate={cardDate}
                        />
                    )}
                </Wrapper>
            </Box>
        </Box>

    );
}
export { DashboardPage };
