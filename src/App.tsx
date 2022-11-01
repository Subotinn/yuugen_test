import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '@fontsource/poppins';

import { DashboardPage } from './pages/DashboardPage';
import { CreatePage } from './pages/CreatePage';
import { LayoutPage } from './pages/LayoutPage';

import './i18n';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="create" element={<CreatePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
