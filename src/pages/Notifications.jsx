import React, { useState } from 'react';
import { mockNotifications } from '../data/mockData';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const filteredNotifications = filter === 'unread'
    ? mockNotifications.filter((n) => !n.read)
    : mockNotifications;

  const markAsRead = (id) => {
    // In a real app, this would update the state or call an API
    console.log(`Mark notification ${id} as read`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 dark:from-pink-800 dark:to-pink-900 rounded-lg shadow p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Notifications</h1>
        <p className="text-pink-100">
          {mockNotifications.filter((n) => !n.read).length} Unread Notifications
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'all', label: 'All Notifications' },
          { key: 'unread', label: 'Unread' },
          { key: 'academic', label: 'Academic' },
          { key: 'system', label: 'System' },
          { key: 'library', label: 'Library' },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === f.key
                ? 'bg-pink-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 rounded-lg border transition ${
                notification.read
                  ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  : 'bg-blue-50 dark:bg-blue-900/30 border-blue-400 dark:border-blue-600'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    {!notification.read && (
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    )}
                    <h3 className={`font-bold text-lg ${
                      notification.read
                        ? 'text-gray-900 dark:text-white'
                        : 'text-blue-900 dark:text-blue-100'
                    }`}>
                      {notification.title}
                    </h3>
                  </div>
                  <p className={`mt-2 leading-relaxed ${
                    notification.read
                      ? 'text-gray-600 dark:text-gray-400'
                      : 'text-blue-800 dark:text-blue-200'
                  }`}>
                    {notification.message}
                  </p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="ml-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                  >
                    Mark Read
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                📅 {new Date(notification.date).toLocaleDateString()} at {new Date(notification.date).toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No notifications to display</p>
          </div>
        )}
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          {[
            { label: 'Emails from Academic Department', enabled: true },
            { label: 'Course Announcements', enabled: true },
            { label: 'Grade Releases', enabled: true },
            { label: 'Library Notifications', enabled: false },
            { label: 'System Updates', enabled: true },
          ].map((pref, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
              <input
                type="checkbox"
                defaultChecked={pref.enabled}
                className="w-4 h-4 text-blue-600 rounded cursor-pointer"
              />
              <span className="text-gray-900 dark:text-white font-medium">{pref.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;