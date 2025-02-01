import React from 'react';
import { BookOpen, Users, Shield, Cloud, Zap, Search, Download, Share2, BookCheck, MessageSquare, Bell, Laptop } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Comprehensive Notes",
      description: "Access detailed notes for all BCA subjects, carefully curated and verified by top students and faculty members."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Collaborative Learning",
      description: "Join study groups, participate in discussions, and share knowledge with fellow BCA students."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Verified Content",
      description: "All study materials are verified by experienced faculty members to ensure accuracy and relevance."
    },
    {
      icon: <Cloud className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Cloud Storage",
      description: "Store and access your study materials from anywhere, with automatic syncing across devices."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Quick Access",
      description: "Fast and efficient search system to find exactly what you need when you need it."
    },
    {
      icon: <Download className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Offline Access",
      description: "Download notes and access them offline, perfect for studying without internet connection."
    }
  ];

  const advancedFeatures = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Smart Search",
      description: "Advanced search functionality with filters for subjects, topics, and content type."
    },
    {
      icon: <Share2 className="h-6 w-6 text-white" />,
      title: "Easy Sharing",
      description: "Share notes and materials instantly with classmates through various channels."
    },
    {
      icon: <BookCheck className="h-6 w-6 text-white" />,
      title: "Progress Tracking",
      description: "Track your study progress and get personalized recommendations."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Discussion Forums",
      description: "Engage in topic-specific discussions with peers and mentors."
    },
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Smart Notifications",
      description: "Get notified about new materials and updates in your favorite subjects."
    },
    {
      icon: <Laptop className="h-6 w-6 text-white" />,
      title: "Cross-Platform",
      description: "Access NotesHub seamlessly across all your devices."
    }
  ];

  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Better Learning
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover all the tools and features designed to make your BCA journey smoother and more productive.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Core Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
      </section>

      {/* Advanced Features */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-indigo-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join NotesHub today and unlock all these powerful features to enhance your learning experience.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-colors duration-200">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;