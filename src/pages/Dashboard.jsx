import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { mockStats, mockGrades, mockNotifications } from '../data/mockData';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Current Courses', value: mockStats.totalCourses, icon: '📚', color: 'bg-blue-100 dark:bg-blue-900' },
    { label: 'Completed Assignments', value: mockStats.completedAssignments, icon: '✅', color: 'bg-green-100 dark:bg-green-900' },
    { label: 'Upcoming Exams', value: mockStats.upcomingExams, icon: '📝', color: 'bg-orange-100 dark:bg-orange-900' },
    { label: 'Library Books', value: mockStats.libraryBooks, icon: '📖', color: 'bg-purple-100 dark:bg-purple-900' },
  ];

  const recentGrades = mockGrades.slice(0, 3);
  const unreadNotifications = mockNotifications.filter((n) => !n.read);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name || 'Student'}! 👋</h1>
        <p className="text-blue-100">
          Student ID: <span className="font-semibold">{user?.studentId || 'DIU-XXXXX'}</span>
        </p>
        <p className="text-blue-100 mt-2">
          {user?.department || 'Computer Science & Engineering'} • Spring 2024
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className={`inline-block p-3 rounded-lg mb-3 ${stat.color}`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* GPA Card */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 rounded-lg shadow-lg p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-indigo-100 text-sm font-semibold mb-1">CUMULATIVE GPA</p>
            <p className="text-4xl font-bold">{mockStats.averageGPA}</p>
          </div>
          <div className="bg-white/20 rounded-full p-4">
            <span className="text-3xl">🎓</span>
          </div>
        </div>
        <p className="text-indigo-100 mt-4 text-sm">Progress: Maintain excellent academic standing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Grades */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Grades</h2>
          <div className="space-y-3">
            {recentGrades.map((grade, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">{grade.courseName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{grade.courseCode}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-bold text-gray-900 dark:text-white">{grade.marks}%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{grade.creditHours} credits</p>
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-lg font-bold text-white ${
                    grade.grade.startsWith('A') ? 'bg-green-500' :
                    grade.grade.startsWith('B') ? 'bg-blue-500' :
                    'bg-orange-500'
                  }`}>
                    {grade.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            View All Grades →
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Notifications {unreadNotifications.length > 0 && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">{unreadNotifications.length}</span>}
          </h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {mockNotifications.slice(0, 4).map((notif) => (
              <div key={notif.id} className={`p-3 rounded-lg border-l-4 ${
                notif.read
                  ? 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600'
                  : 'bg-blue-50 dark:bg-blue-900/30 border-blue-500'
              }`}>
                <p className={`font-semibold text-sm ${
                  notif.read
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-blue-900 dark:text-blue-200'
                }`}>
                  {notif.title}
                </p>
                <p className={`text-xs mt-1 ${
                  notif.read
                    ? 'text-gray-600 dark:text-gray-400'
                    : 'text-blue-800 dark:text-blue-300'
                }`}>
                  {notif.message.substring(0, 60)}...
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            View All Notifications →
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Courses', icon: '📚' },
            { name: 'Schedule', icon: '📅' },
            { name: 'Grades', icon: '📊' },
            { name: 'Profile', icon: '👤' },
          ].map((link, idx) => (
            <button key={idx} className="p-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition text-center">
              <span className="text-2xl block mb-2">{link.icon}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
