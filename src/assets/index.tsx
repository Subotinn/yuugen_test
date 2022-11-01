import React from 'react';
import { IIcon } from './types';

export const LogoIcon = (props: IIcon) => {
    return (
        <svg
            width={62}
            height={47}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M59.4 5.917h-4.086c-.718 0-1.3-.588-1.3-1.314V0h-.185v30.055H53.1c-4.134 0-5.991-2.105-7.785-4.142-1.705-1.934-3.468-3.944-7.161-3.944H16.27c-4.47.001-8.096-3.661-8.099-8.182V0h-.185v4.603c0 .348-.137.683-.381.93a1.293 1.293 0 01-.92.384H2.6c-1.436 0-2.6 1.177-2.6 2.63v5.239c.003 9.085 7.287 16.448 16.272 16.448H62V8.546c0-1.452-1.164-2.629-2.6-2.629zM53.786 38.803H4.534a2.61 2.61 0 00-2.614 2.608V47h36.112c3.713 0 5.484-1.986 7.198-3.912 1.803-2.021 3.67-4.11 7.825-4.11h6.332A2.61 2.61 0 0062 36.37v-5.586h-8.214v8.02z"
                fill="#BCC8BC"
            />
        </svg>
    );
};

export function DashboardIcon(props: IIcon) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3 9h18M9 21V9M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                stroke="#293329"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function CreateIcon(props: IIcon) {
    return (
        <svg
            width={18}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7m-6-6l6 6m-6-6v6h6M9 17v-6m-3 3h6"
                stroke="#90A390"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={22}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11 7v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
