import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to the Student Portal, {user?.name || 'Student'}! This is your dashboard.
      </p>
    </div>
  );
};

export default Dashboard;
