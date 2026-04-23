import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { mockStudents } from '../data/mockData';

const Profile = () => {
  const { user } = useAuth();
  const studentData = mockStudents[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl">
              👤
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{studentData.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{studentData.email}</p>
              <div className="mt-2 flex gap-4 text-sm">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Student ID: {studentData.studentId}</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">GPA: {studentData.gpa}</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Academic Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Department</span>
              <span className="font-semibold text-gray-900 dark:text-white">{studentData.department}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
              <span className="text-gray-600 dark:text-gray-400">Batch</span>
              <span className="font-semibold text-gray-900 dark:text-white">{studentData.batch}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
              <span className="text-gray-600 dark:text-gray-400">Current Semester</span>
              <span className="font-semibold text-gray-900 dark:text-white">{studentData.semester}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
              <span className="text-gray-600 dark:text-gray-400">CGPA</span>
              <span className="font-semibold text-green-600 dark:text-green-400">{studentData.gpa}</span>
            </div>
          </div>
        </div>

        {/* Credit Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Credit Information</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">Total Credits Required</span>
                <span className="font-semibold text-gray-900 dark:text-white">{studentData.totalCredits}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(studentData.completedCredits / studentData.totalCredits) * 100}%` }}></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {studentData.completedCredits} of {studentData.totalCredits} credits completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <p className="text-gray-900 dark:text-white font-semibold mt-1">{studentData.email}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
            <p className="text-gray-900 dark:text-white font-semibold mt-1">+880 1XXX-XXXXXX</p>
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">Campus Address</label>
            <p className="text-gray-900 dark:text-white font-semibold mt-1">Daffodil International University, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;