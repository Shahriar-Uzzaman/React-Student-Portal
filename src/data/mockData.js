// Mock DIU Student Data
export const mockStudents = [
  {
    id: 1,
    name: 'Md. Habib Rahman',
    email: 'habib.rahman@diu.edu.bd',
    studentId: 'DIU-20211001',
    department: 'Computer Science & Engineering',
    batch: '2021',
    semester: 6,
    gpa: 3.85,
    totalCredits: 105,
    completedCredits: 105,
  },
  {
    id: 2,
    name: 'Fatima Akhter',
    email: 'fatima.akhter@diu.edu.bd',
    studentId: 'DIU-20221005',
    department: 'Software Engineering',
    batch: '2022',
    semester: 4,
    gpa: 3.92,
    totalCredits: 75,
    completedCredits: 60,
  },
  {
    id: 3,
    name: 'Ahmed Hassan Khan',
    email: 'ahmed.hassan@diu.edu.bd',
    studentId: 'DIU-20231002',
    department: 'Information Technology',
    batch: '2023',
    semester: 2,
    gpa: 3.78,
    totalCredits: 45,
    completedCredits: 30,
  },
];

export const mockCourses = [
  {
    id: 1,
    code: 'CSE301',
    title: 'Data Structures',
    instructor: 'Dr. Ashfaque Ahmed Shawon',
    credits: 3,
    schedule: 'Mon, Wed 10:00 AM - 11:30 AM, Room 501',
    semester: 6,
  },
  {
    id: 2,
    code: 'CSE302',
    title: 'Database Systems',
    instructor: 'Prof. Mohammad A. Mottalib',
    credits: 3,
    schedule: 'Tue, Thu 2:00 PM - 3:30 PM, Room 502',
    semester: 6,
  },
  {
    id: 3,
    code: 'CSE303',
    title: 'Web Development',
    instructor: 'Engr. Md. Shakhawat Hossain',
    credits: 3,
    schedule: 'Mon, Wed 1:00 PM - 2:30 PM, Lab A',
    semester: 6,
  },
  {
    id: 4,
    code: 'CSE304',
    title: 'Software Engineering',
    instructor: 'Dr. Sifat Momen',
    credits: 3,
    schedule: 'Tue, Thu 10:00 AM - 11:30 AM, Room 503',
    semester: 6,
  },
];

export const mockGrades = [
  { courseCode: 'CSE301', courseName: 'Data Structures', grade: 'A', marks: 92, creditHours: 3 },
  { courseCode: 'CSE302', courseName: 'Database Systems', grade: 'A-', marks: 89, creditHours: 3 },
  { courseCode: 'CSE303', courseName: 'Web Development', grade: 'A', marks: 95, creditHours: 3 },
  { courseCode: 'CSE304', courseName: 'Software Engineering', grade: 'B+', marks: 87, creditHours: 3 },
];

export const mockNotifications = [
  {
    id: 1,
    title: 'Semester Results Published',
    message: 'Your grades for the current semester have been published. Check your transcript for details.',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 2,
    title: 'Course Registration Opened',
    message: 'Course registration for the next semester is now open. Register by December 15, 2024.',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 3,
    title: 'Library Book Due',
    message: 'Your borrowed book "JavaScript: The Good Parts" is due on November 30, 2024.',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 4,
    title: 'Exam Schedule Released',
    message: 'Your final exam schedule has been released. Download it from the Academic section.',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    read: true,
  },
];

export const mockStats = {
  totalCourses: 4,
  completedAssignments: 12,
  upcomingExams: 2,
  libraryBooks: 3,
  averageGPA: 3.85,
};
