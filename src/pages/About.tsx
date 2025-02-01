import React from 'react';
import { Users, Target, BookOpen, Award, Heart, Coffee } from 'lucide-react';

const About = () => {
  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">NotesHub</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're on a mission to make quality education accessible to every BCA student at Purwanchal University.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To create a collaborative platform where BCA students can easily access, share, and contribute to high-quality study materials, fostering a community of active learners.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the most trusted and comprehensive resource hub for BCA students at Purwanchal University, setting new standards in collaborative learning.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Excellence",
                description: "We strive for excellence in every piece of content we deliver."
              },
              {
                icon: <Heart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Community",
                description: "We believe in the power of community and collaborative learning."
              },
              {
                icon: <Coffee className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Dedication",
                description: "We're dedicated to supporting students throughout their journey."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Jane Smith",
              role: "Content Director",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Mike Johnson",
              role: "Technical Lead",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Sarah Williams",
              role: "Community Manager",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="relative w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in our mission to revolutionize how BCA students access and share knowledge.
              Together, we can create an amazing learning experience for everyone.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-colors duration-200">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;