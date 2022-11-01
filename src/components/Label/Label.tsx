import * as React from 'react';

import { Chip, Color, useTheme } from '@mui/material';
import { STATUSES } from '../../constants';
import { useMemo } from 'react';

export type LabelProps = {
    value: STATUSES,
};

const Label = ({ value }: LabelProps) => {
    const theme = useTheme();

    const colors = useMemo(() => ({
        [STATUSES.FINISHED]: {
            backgroundColor: theme.palette.success[50],
            color: theme.palette.success[700],
        },
        [STATUSES.IN_PROGRESS]: {
            backgroundColor: theme.palette.warning[50],
            color: theme.palette.warning[700],
        },
        [STATUSES.DRAFT]: {
            backgroundColor: theme.palette.grey[50],
            color: theme.palette.grey[700],
        },
        [STATUSES.OVERDUE]: {
            backgroundColor: theme.palette.error[50],
            color: theme.palette.error[700],
        },
    }), [theme.palette]);

    return (
        <Chip className="capitalize" label={value} sx={{ backgroundColor: colors[value] }} />
    );
}
export { Label };
