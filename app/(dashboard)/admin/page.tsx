import React from 'react';

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Statistics</h2>
                <p>Total Users: 150</p>
                <p>Total Courses: 25</p>
                <p>Active Enrollments: 75</p>
            </div>
            <div>
                <h2>Quick Actions</h2>
                <button>Add User</button>
                <button>Create Course</button>
                <button>View Reports</button>
            </div>
        </div>
    );
};

export default AdminDashboard;