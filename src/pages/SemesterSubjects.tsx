import React, { useState } from 'react';
import { BookOpen, FileText, Download, Clock, Users, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

// Subject data for each semester
const semesterSubjects = {
  1: [
    { code: "CSC109", name: "Computer System Concepts", credits: 3, pdfUrl: null, driveUrl: "https://drive.google.com/file/d/1VRYFqZg9G9jFXOLEI_TXye-SvMaqLFx-/view", status: "coming-soon" },
    { code: "CSC110", name: "C Programming", credits: 3, pdfUrl: null, driveUrl: "//ya subjeck to link hala", status: "coming-soon" },
    { code: "MTH112", name: "Mathematics I", credits: 3, pdfUrl: null, driveUrl: "//ya subjeck to link hala", status: "coming-soon" },
    { code: "PHY111", name: "Technical English", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG111", name: "Digital Logic", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
  2: [
    { code: "CSC160", name: "Mathematics-II", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "CSC161", name: "Object-Oriented Programming", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "MTH162", name: "Modern Business Practices", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "STA163", name: "Microprocessor and Assembly Language", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG162", name: "Sociology", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
  3: [
    { code: "CSC160", name: "Financial Accounting", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "CSC161", name: "Computer Architecture", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "MTH162", name: "Data Structure and Algorithm", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "STA163", name: "System Analysis and Design", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG162", name: "User Interface Design", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
  4: [
    { code: "CSC160", name: "Technology and Operations Management", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "CSC161", name: "Numerical Methods", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "MTH162", name: "Operating System", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "STA163", name: "Computer Network", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG162", name: "Database Management System", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
  5: [
    { code: "CSC160", name: "Probability and Statistics", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "CSC161", name: "Management Information System", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "MTH162", name: "Object Oriented Analysis and Design", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "STA163", name: "Web Technology", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG162", name: "Computer Graphics", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
  6: [
    { code: "CSC160", name: "Research Methodology", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "CSC161", name: "Software Engineering", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "MTH162", name: "Cyber Security", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "STA163", name: "Advance Object Oriented Programming", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" },
    { code: "ENG162", name: "Artificial Intelligence", credits: 3, pdfUrl: null, driveUrl: "", status: "coming-soon" }
  ],
};

const SemesterSubjects = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);
  
  const subjects = semesterSubjects[selectedSemester] || [];

  // Helper function to convert Google Drive URL to preview format
  const convertDriveUrlToPreview = (driveUrl) => {
    if (!driveUrl || !driveUrl.includes('drive.google.com')) return driveUrl;
    
    const fileIdMatch = driveUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return driveUrl;
  };


  const getViewUrl = (subject) => {
    if (subject.pdfUrl) {
 
      return subject.pdfUrl;
    } else if (subject.driveUrl) {
      
      return convertDriveUrlToPreview(subject.driveUrl);
    }
    return null;
  };

  const openPdfViewer = (subject) => {
    const viewUrl = getViewUrl(subject);
    
    if (!viewUrl) {
      alert('PDF not available yet. Please check back later or contact your instructor.');
      return;
    }
    
 
    const pdfSubject = {
      ...subject,
      viewUrl: viewUrl
    };
    
    setSelectedPdf(pdfSubject);
  };

  const closePdfViewer = () => {
    setSelectedPdf(null);
  };

  const downloadPdf = (subject, fileName) => {
    if (subject.pdfUrl) {
      // Local PDF - direct download
      const link = document.createElement('a');
      link.href = subject.pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (subject.driveUrl) {
      // Google Drive - open in new tab for download
      window.open(subject.driveUrl, '_blank');
    } else {
      alert('PDF not available for download yet. Please check back later.');
    }
  };

  const changeSemester = (direction) => {
    if (direction === 'prev' && selectedSemester > 1) {
      setSelectedSemester(selectedSemester - 1);
    } else if (direction === 'next' && selectedSemester < 6) {
      setSelectedSemester(selectedSemester + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-16">
    
        <section className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => changeSemester('prev')}
                disabled={selectedSemester === 1}
                className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Semester {selectedSemester}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Subjects
                </span>
              </h1>
              
              <button
                onClick={() => changeSemester('next')}
                disabled={selectedSemester === 6}
                className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Access study materials, notes, and resources for all subjects in Semester {selectedSemester}.
            </p>
            
           
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, 4, 5, 6].map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSemester === sem
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Sem {sem}
                </button>
              ))}
            </div>
          </div>
        </section>

     
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
                    {(subject.pdfUrl || subject.driveUrl) ? (
                      <button 
                        onClick={() => openPdfViewer(subject)}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Notes
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Coming Soon
                      </button>
                    )}
                    
                    <button 
                      onClick={() => downloadPdf(subject, `${subject.code}-notes.pdf`)}
                      className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!subject.pdfUrl && !subject.driveUrl}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {(subject.pdfUrl || subject.driveUrl) ? 'Download' : 'Coming Soon'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Viewer Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedPdf.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedPdf.code} - Course Notes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadPdf(selectedPdf, `${selectedPdf.code}-notes.pdf`)}
                    className="flex items-center px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button
                    onClick={closePdfViewer}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={selectedPdf.viewUrl}
                  className="w-full h-full border-none"
                  title={`${selectedPdf.code} Notes`}
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default SemesterSubjects;