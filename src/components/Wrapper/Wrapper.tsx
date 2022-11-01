import { Paper, styled } from '@mui/material';

const Wrapper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

export { Wrapper };
