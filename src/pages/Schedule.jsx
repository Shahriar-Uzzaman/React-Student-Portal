import React from 'react';
import { mockCourses } from '../data/mockData';

const Schedule = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getCoursesForDay = (day) => {
    const dayMap = {
      'Monday': ['CSE301', 'CSE303'],
      'Tuesday': ['CSE302', 'CSE304'],
      'Wednesday': ['CSE301', 'CSE303'],
      'Thursday': ['CSE302', 'CSE304'],
      'Friday': [],
    };
    return dayMap[day] || [];
  };

  const getTimeSlots = (courseCode) => {
    const courseMap = {
      'CSE301': '10:00 AM - 11:30 AM',
      'CSE302': '2:00 PM - 3:30 PM',
      'CSE303': '1:00 PM - 2:30 PM',
      'CSE304': '10:00 AM - 11:30 AM',
    };
    return courseMap[courseCode] || '';
  };

  const getRoomNumber = (courseCode) => {
    const roomMap = {
      'CSE301': 'Room 501',
      'CSE302': 'Room 502',
      'CSE303': 'Lab A',
      'CSE304': 'Room 503',
    };
    return roomMap[courseCode] || '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 rounded-lg shadow p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Class Schedule</h1>
        <p className="text-green-100">Spring 2024 Semester</p>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="grid grid-cols-5 gap-0">
          {weekDays.map((day) => (
            <div key={day} className="p-4 bg-gray-100 dark:bg-gray-700 border-r border-gray-200 dark:border-gray-600 last:border-r-0">
              <h3 className="font-bold text-gray-900 dark:text-white text-center mb-4">{day}</h3>
              <div className="space-y-2">
                {getCoursesForDay(day).length > 0 ? (
                  getCoursesForDay(day).map((courseCode, idx) => {
                    const course = mockCourses.find((c) => c.code === courseCode);
                    return (
                      <div
                        key={idx}
                        className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg border border-blue-300 dark:border-blue-700 text-sm"
                      >
                        <p className="font-bold text-blue-900 dark:text-blue-100">{course.code}</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300">{getTimeSlots(courseCode)}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{getRoomNumber(courseCode)}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm py-4">No classes</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Schedule */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Detailed Schedule</h2>
        <div className="space-y-3">
          {mockCourses.map((course) => (
            <div key={course.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{course.code}: {course.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">📅 {course.schedule}</p>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.credits} Credits
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          {[
            { date: '2024-12-15', title: 'CSE301 Midterm Exam', time: '10:00 AM - 12:00 PM', location: 'Exam Hall 1' },
            { date: '2024-12-20', title: 'CSE303 Project Submission', time: '6:00 PM (Online)', location: 'Portal' },
            { date: '2024-12-25', title: 'CSE302 Quiz', time: '2:00 PM - 2:45 PM', location: 'Room 502' },
          ].map((event, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <div className="text-2xl">📌</div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white">{event.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  📅 {event.date} • ⏰ {event.time}<br />
                  📍 {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;