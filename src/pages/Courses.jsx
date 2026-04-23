import React, { useState } from 'react';
import { mockCourses } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [selectedSemester] = useState(6);

  const handleCourseClick = (courseId) => {
    navigate(`/coursedetail/${courseId}`);
  };

  const semesterCourses = mockCourses.filter((course) => course.semester === selectedSemester);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-lg shadow p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-blue-100">Spring 2024 Semester - {semesterCourses.length} Courses</p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {semesterCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{course.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">{course.code}</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                {course.credits} Credits
              </span>
            </div>

            <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-lg">👨‍🏫</span> {course.instructor}
              </p>
              <p className="flex items-start gap-2">
                <span className="text-lg">📅</span> {course.schedule}
              </p>
            </div>

            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Total Credit Hours</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {semesterCourses.reduce((sum, c) => sum + c.credits, 0)}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Courses Enrolled</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{semesterCourses.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Courses Completed</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">12</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;