import * as React from 'react';

import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Wrapper } from '../../components/Wrapper';
import { PlusIcon } from '../../assets';
import { FormEventHandler, useCallback, useState } from 'react';
import { endpoints } from '../../api/api';
import { STATUSES } from '../../constants';
import { useTranslation } from 'react-i18next';

type DefaultErrors = {
    title: string,
    status: string,
    text: string,
}

const defaultErrors: DefaultErrors = {
    title: '',
    status: '',
    text: '',
};

const CreatePage = () => {
    const { t } = useTranslation();
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<string>(STATUSES.DRAFT);
    const [text, setText] = useState('');
    const [isSaving, setIsSaving] = useState(false)
    const [errors, setErrors] = useState<DefaultErrors>(defaultErrors);

    const clearData = useCallback(() => {
        setTitle('');
        setStatus(STATUSES.DRAFT);
        setText('')
        setErrors(defaultErrors)
    }, [
        setTitle, setStatus, setText, defaultErrors
    ]);

    const saveParsedErrors = useCallback((data: string[]) => {
        if (data.length) {
            const errors = data.reduce((acc: DefaultErrors, errorMessage: string) => {
                const errorFieldName = errorMessage.split(' ')[0].toLowerCase();

                if (Object.keys(defaultErrors).includes(errorFieldName)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    acc[errorFieldName] = errorMessage;
                }

                return acc;
            }, { ...defaultErrors });

            setErrors(errors);
        } else {
            setErrors({ ...defaultErrors });
        }
    }, [STATUSES, setErrors])

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((e: any) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            fetch(endpoints.create, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        title,
                        status,
                        text,
                    }
                )
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((json) => {
                clearData();
                setIsSaving(false);
            }).catch((response) => {
                response.json().then((json: any) => {
                    saveParsedErrors(json.message);
                })
                setIsSaving(false);
            });
        } catch (e) {
            setIsSaving(false);
        }
    }, [text, status, title, setIsSaving, clearData, saveParsedErrors]);

    return (
        <Box className="m-8 px-8 mx-auto" maxWidth="1440px" marginX="auto">
            <Typography variant="h3" gutterBottom>
                {t('create.form')}
            </Typography>
            <Wrapper className="p-8">
                <form onSubmit={handleSubmit}>
                    <Box
                        component="form"
                        autoComplete="off"
                        width='553px'
                    >
                        <div>
                            <InputLabel id="title-label" error={!!errors.title}>{t('create.title')}</InputLabel>
                            <TextField
                                id="title-input"
                                variant="outlined"
                                onChange={e=>setTitle(String(e.target.value))}
                                value={title}
                                disabled={isSaving}
                                error={!!errors.title}
                                helperText={errors.title}
                            />
                        </div>
                        <br />
                        <div>
                            <InputLabel id="status-label" error={!!errors.status}>{t('create.status')}</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="status-label"
                                    id="status-input"
                                    value={status}
                                    onChange={e=>setStatus(String(e.target.value))}
                                    disabled={isSaving}
                                    error={!!errors.status}
                                >
                                    <MenuItem value={'draft'}>Draft</MenuItem>
                                    <MenuItem value={'overdue'}>Overdue</MenuItem>
                                    <MenuItem value={'finished'}>Finished</MenuItem>
                                    <MenuItem value={'inprogress'}>Inprogress</MenuItem>
                                </Select>
                                <FormHelperText>{errors.status}</FormHelperText>
                            </FormControl>
                        </div>
                        <br />
                        <div>
                            <InputLabel id="description-label" error={!!errors.text}>{t('create.description')}</InputLabel>
                            <TextField
                                id="description-input"
                                multiline
                                rows={4}
                                value={text}
                                placeholder={t('create.description_placeholder')}
                                fullWidth
                                onChange={e=>setText(String(e.target.value))}
                                disabled={isSaving}
                                error={!!errors.text}
                                helperText={errors.text}
                            />
                        </div>
                    </Box>
                    <br />
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        endIcon={<PlusIcon />}
                        color="success"
                        size="large"
                        loading={isSaving}
                        loadingPosition="end"
                    >
                        {t('create.create')}
                    </LoadingButton>
                </form>
            </Wrapper>
        </Box>

    );
}
export { CreatePage };
