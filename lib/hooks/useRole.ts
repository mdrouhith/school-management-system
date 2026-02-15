// useRole.ts

import { useEffect, useState } from 'react';

type Role = 'admin' | 'user' | 'guest';

type UseRole = {
  role: Role;
  isAuthorized: (requiredRole: Role) => boolean;
};

const useRole = (initialRole: Role): UseRole => {
  const [role, setRole] = useState<Role>(initialRole);

  useEffect(() => {
    // Hypothetical function to fetch user role from backend
    const fetchUserRole = async () => {
      // Implement fetching logic here
    };

    fetchUserRole();
  }, []);

  const isAuthorized = (requiredRole: Role): boolean => {
    // Add role checking logic
    return role === requiredRole;
  };

  return { role, isAuthorized };
};

export default useRole;
