import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            dashboard: {
                my_todo: 'My ToDo\'s',
                report: 'Publish report',
                column: {
                    invoice: 'Invoice',
                    status: 'Status',
                    date: 'Due Date',
                },
            },
            header: {
                dashboard: 'Dashboard',
                create: 'Create',
            },
            create: {
                form: 'Create Form',
                title: 'Title',
                status: 'Status',
                description: 'Description',
                description_placeholder: 'Enter a description',
                create: 'Create'
            }
        }
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
