import React, { useEffect } from 'react';
import { ExternalLink, ArrowRight, Clock, Award, Users } from 'lucide-react';

const CourseRegistrationPage = () => {
  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      window.open('https://example.com/course-registration', '_blank');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirectNow = () => {
    window.open('https://example.com/course-registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-blue-100 animate-fade-in">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl animate-bounce">
                <ExternalLink className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Kursga Yozilish
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Siz kursga yozilish sahifasiga yo'naltirilmoqdasiz. 
              Iltimos, biroz kuting yoki quyidagi tugmani bosing.
            </p>
          </div>

          {/* Loading Animation */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-500">5 soniyadan keyin avtomatik yo'naltirish...</p>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="inline-flex p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Vaqt</h3>
              <p className="text-gray-600 text-sm">O'zingizga qulay vaqtda o'qing</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="inline-flex p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white mb-3">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sertifikat</h3>
              <p className="text-gray-600 text-sm">Kursni tugatgach sertifikat oling</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="inline-flex p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Boshqa talabalar bilan muloqot</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleRedirectNow}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Hoziroq Yozilish</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-sm text-gray-500">
              Yoki 5 soniya kutib, avtomatik yo'naltirishni kuting
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Qo'shimcha Ma'lumot
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kursga yozilishdan oldin barcha shartlar va talablar bilan tanishib chiqing. 
              Savollaringiz bo'lsa, biz bilan bog'laning: +998 (90) 123-45-67
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationPage;