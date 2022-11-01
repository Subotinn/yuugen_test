import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Column, DataItem, ValueFormatter } from '../../pages/DashboardPage/types';
import { useTranslation } from 'react-i18next';

const TodoList = ({ data = [], columns = [] }: { data:  DataItem[], columns: Column[]}) => {
    const { t } = useTranslation();

    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth, backgroundColor: 'white' }}
                            >
                                {t(column.label)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value: ValueFormatter | string = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format
                                                    ? column.format(value as never)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export { TodoList };
