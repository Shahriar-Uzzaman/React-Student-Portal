import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockData';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = mockCourses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">Course not found</p>
        <button
          onClick={() => navigate('/courses')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-800 dark:to-indigo-900 rounded-lg shadow p-6 text-white flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-indigo-100 text-lg font-semibold">{course.code}</p>
        </div>
        <button
          onClick={() => navigate('/courses')}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
        >
          ← Back
        </button>
      </div>

      {/* Course Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">CREDIT HOURS</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{course.credits}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">SEMESTER</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{course.semester}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">STATUS</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">Enrolled</p>
        </div>
      </div>

      {/* Instructor & Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Instructor</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
              👨‍🏫
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{course.instructor}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Course Instructor</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Class Schedule</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">📅 {course.schedule}</p>
          <button className="mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Add to Calendar →
          </button>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Course Content</h2>
        <div className="space-y-3">
          {[
            { name: 'Module 1: Introduction', status: 'completed' },
            { name: 'Module 2: Fundamentals', status: 'completed' },
            { name: 'Module 3: Intermediate Concepts', status: 'in-progress' },
            { name: 'Module 4: Advanced Topics', status: 'pending' },
          ].map((module, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className={`text-xl ${
                module.status === 'completed' ? '✅' :
                module.status === 'in-progress' ? '🔄' : '⏳'
              }`}></span>
              <span className="flex-1 text-gray-900 dark:text-white">{module.name}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                module.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                module.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
              }`}>
                {module.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Assignments & Assessments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Assignments</h2>
        <div className="space-y-3">
          {[
            { name: 'Assignment 1', dueDate: '2024-12-15', status: 'submitted' },
            { name: 'Assignment 2', dueDate: '2024-12-20', status: 'submitted' },
            { name: 'Assignment 3', dueDate: '2024-12-25', status: 'pending' },
          ].map((assignment, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{assignment.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Due: {assignment.dueDate}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                assignment.status === 'submitted'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
              }`}>
                {assignment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;