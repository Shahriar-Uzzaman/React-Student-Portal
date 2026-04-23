import React, { useState } from 'react';
import { mockGrades } from '../data/mockData';

const Grades = () => {
  const [filterSemester, setFilterSemester] = useState('current');

  const currentGrades = filterSemester === 'current' ? mockGrades : mockGrades;
  const totalCredits = currentGrades.reduce((sum, g) => sum + g.creditHours, 0);
  const weightedGPA = 3.85;

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900';
    if (grade.startsWith('B')) return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900';
    if (grade.startsWith('C')) return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900';
    return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900';
  };

  const getGradePoints = (grade) => {
    const points = {
      'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D': 1.0, 'F': 0.0,
    };
    return points[grade] || 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-800 dark:to-purple-900 rounded-lg shadow p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Academic Grades</h1>
        <p className="text-purple-100">View your grades and GPA</p>
      </div>

      {/* GPA Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">CUMULATIVE GPA</p>
          <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mt-2">{weightedGPA}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Excellent Standing</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">COURSES COMPLETED</p>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">{currentGrades.length}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Total Credit Hours: {totalCredits}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">CLASS RANK</p>
          <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">Top 10%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Outstanding Performance</p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {['current', 'all'].map((option) => (
          <button
            key={option}
            onClick={() => setFilterSemester(option)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterSemester === option
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {option === 'current' ? 'Current Semester' : 'All Semesters'}
          </button>
        ))}
      </div>

      {/* Grades Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Course Code</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Course Name</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 dark:text-white">Credits</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 dark:text-white">Marks</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 dark:text-white">Grade</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 dark:text-white">Points</th>
              </tr>
            </thead>
            <tbody>
              {currentGrades.map((grade, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">{grade.courseCode}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{grade.courseName}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-white">{grade.creditHours}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">{grade.marks}%</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(grade.grade)}`}>
                      {grade.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                    {getGradePoints(grade.grade).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Grade Distribution</h2>
        <div className="space-y-4">
          {[
            { label: 'A Grades', count: 2, color: 'bg-green-500' },
            { label: 'B Grades', count: 1, color: 'bg-blue-500' },
            { label: 'C Grades', count: 0, color: 'bg-orange-500' },
            { label: 'D Grades', count: 0, color: 'bg-red-500' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.count} course(s)</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className={`${item.color} h-3 rounded-full`} style={{ width: `${(item.count / currentGrades.length) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grades;