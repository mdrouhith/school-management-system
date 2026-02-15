import React from 'react';
import Classes from './Classes';
import Attendance from './Attendance';
import Grades from './Grades';

const StudentDashboard = () => {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Classes />
            <Attendance />
            <Grades />
        </div>
    );
};

export default StudentDashboard;
