import React from 'react';
import { AuthProvider } from './auth';

const RootLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang="en">
                <head>
                    <title>School Management System</title>
                </head>
                <body>{children}</body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;