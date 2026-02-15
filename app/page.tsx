import React from 'react';
import { useUser } from '../hooks/useUser'; // A custom hook to get user info
import AdminHomePage from './AdminHomePage';
import TeacherHomePage from './TeacherHomePage';
import StudentHomePage from './StudentHomePage';

const HomePage = () => {
    const { user } = useUser(); // Assuming useUser fetches current user roles

    if (!user) {
        return <div>Loading...</div>; // Handle loading state
    }

    switch (user.role) {
        case 'admin':
            return <AdminHomePage />;
        case 'teacher':
            return <TeacherHomePage />;
        case 'student':
            return <StudentHomePage />;
        default:
            return <div>Unauthorized access</div>;
    }
};

export default HomePage;