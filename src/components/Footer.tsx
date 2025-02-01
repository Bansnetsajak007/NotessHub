import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">NotesHub</span>
            </div>
            <p className="text-sm text-gray-400">
              Your ultimate resource for BCA study materials at Purwanchal University.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-indigo-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-indigo-400 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Study Materials</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Notes Archive</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Question Bank</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Contribute</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@noteshub.com</li>
              <li>Location: Purwanchal University</li>
              <li>Hours: Mon-Fri 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} NotesHub. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;