import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const semesters = [
  {
    number: 1,
    title: "First Semester",
    description: "Foundation courses introducing core programming concepts and mathematics."
  },
  {
    number: 2,
    title: "Second Semester",
    description: "Advanced programming concepts and introduction to system architecture."
  },
  {
    number: 3,
    title: "Third Semester",
    description: "Data structures, algorithms, and database management systems."
  },
  {
    number: 4,
    title: "Fourth Semester",
    description: "Software engineering principles and web development technologies."
  },
  {
    number: 5,
    title: "Fifth Semester",
    description: "Advanced database concepts and system analysis."
  },
  {
    number: 6,
    title: "Sixth Semester",
    description: "Network programming and mobile application development."
  },
  {
    number: 7,
    title: "Seventh Semester",
    description: "Advanced web technologies and project management."
  },
  {
    number: 8,
    title: "Eighth Semester",
    description: "Final year project and specialized elective courses."
  }
];

const Semesters = () => {
  const navigate = useNavigate();

  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Semester
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Access comprehensive study materials organized by semester. Select your current semester to get started.
          </p>
        </div>
      </section>

      {/* Semesters Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semesters.map((semester) => (
            <div
              key={semester.number}
              onClick={() => navigate(`/semester/${semester.number}`)}
              className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  {semester.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {semester.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {semester.description}
              </p>
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 group-hover:translate-x-2 transition-transform duration-200">
                View Subjects
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Semesters;