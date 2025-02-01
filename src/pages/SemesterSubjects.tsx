import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, FileText, Download, Clock, Users } from 'lucide-react';

// Subject data for each semester
const semesterSubjects = {
  1: [
    { code: "CSC109", name: "Introduction to Information Technology", credits: 3 },
    { code: "CSC110", name: "C Programming", credits: 3 },
    { code: "MTH112", name: "Mathematics I", credits: 3 },
    { code: "PHY111", name: "Physics", credits: 3 },
    { code: "ENG111", name: "English I", credits: 3 }
  ],
  2: [
    { code: "CSC160", name: "Discrete Mathematics", credits: 3 },
    { code: "CSC161", name: "Object-Oriented Programming", credits: 3 },
    { code: "MTH162", name: "Mathematics II", credits: 3 },
    { code: "STA163", name: "Statistics I", credits: 3 },
    { code: "ENG162", name: "English II", credits: 3 }
  ],
  // Add data for other semesters...
};

const SemesterSubjects = () => {
  const { semesterId } = useParams();
  const semester = parseInt(semesterId || "1");
  const subjects = semesterSubjects[semester as keyof typeof semesterSubjects] || [];

  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Semester {semester}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Subjects
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Access study materials, notes, and resources for all subjects in Semester {semester}.
          </p>
        </div>
      </section>

      {/* Subjects List */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.code}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 rounded-full">
                    {subject.code}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {subject.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {subject.credits} Credits
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    10 Resources
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    100+ Students
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    <FileText className="h-4 w-4 mr-2" />
                    View Notes
                  </button>
                  <button className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors duration-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SemesterSubjects;