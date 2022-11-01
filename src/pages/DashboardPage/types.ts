import { STATUSES } from '../../constants';

type ColumnFormatterResult = DateFormatter | ColumnFormatter;

export type ValueFormatter = number | STATUSES;

type DateFormatter = (value: string) => string

type ColumnFormatter = (value: STATUSES) => JSX.Element

export interface Column {
    id: 'title' | 'status' | 'createdAt';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: ColumnFormatterResult
}

export interface DataItem {
    id: number,
    status: string,
    text: string,
    title: string,
    createdAt: string,
}
