import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// ProtectedRoute component that checks user role before granting access to a route
const ProtectedRoute = ({ component: Component, userRole, allowedRoles, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                // Check if user's role is in the allowed roles
                if (allowedRoles.includes(userRole)) {
                    // Role is allowed, render the component
                    return <Component {...props} />;
                } else {
                    // Role is not allowed, redirect to a different page (e.g., login or not authorized)
                    return <Redirect to='/not-authorized' />;
                }
            }}
        />
    );
};

export default ProtectedRoute;