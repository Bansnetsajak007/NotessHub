import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, BookCheck, ArrowRight, Github, BookOpen, Download, Share2 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your Ultimate BCA Notes Hub at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Purwanchal University
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Access, share, and collaborate on study materials specifically curated for BCA students. 
                Join the community of learners and excel in your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/semesters')}
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center justify-center">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" 
              alt="Students studying"
              className="relative rounded-lg shadow-2xl transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 dark:bg-indigo-500 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-indigo-100">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-indigo-100">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose NotesHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "PU Specific Content",
                description: "Notes and materials specifically aligned with Purwanchal University's BCA curriculum."
              },
              {
                icon: <Download className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Easy Access",
                description: "Download and access study materials anytime, anywhere. Available offline too."
              },
              {
                icon: <Share2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
                title: "Share & Collaborate",
                description: "Share your notes and collaborate with fellow students to enhance learning."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Excel in Your BCA Journey?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join NotesHub today and get access to comprehensive study materials, 
              collaborate with fellow students, and achieve academic excellence.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-colors duration-200">
              Join NotesHub Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;