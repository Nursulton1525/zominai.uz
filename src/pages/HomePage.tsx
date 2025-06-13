import React, { useEffect, useState } from 'react';
import { Brain, Code, Users, Zap, Award, Building, User, Heart } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Sun'iy Intellekt",
      description: "Zamonaviy AI texnologiyalari yordamida murakkab masalalarni hal qiling"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tez va Samarali",
      description: "Bir soniyada ming ta so'rovni qayta ishlay olamiz"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Keng Imkoniyatlar",
      description: "Matn, kod, tahlil - barcha sohalarda yordam beramiz"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Har doim sizning xizmatingizdamiz"
    }
  ];

  const sponsors = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateHub", logo: "🚀" },
    { name: "DataFlow", logo: "📊" },
    { name: "AI Solutions", logo: "🤖" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl animate-bounce">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                AI Assistant
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Kelajakning sun'iy intellekti bilan tanishing. Savollaringizga javob oling, 
              muammolaringizni hal qiling va yangi imkoniyatlarni kashf eting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Chat Boshlash
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Ko'proq Ma'lumot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI ning Imkoniyatlari
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bizning AI yordamchimiz sizga quyidagi sohalarda yordam beradi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ishlab Chiquvchi Haqida
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    AI Development Team
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Bizning professional dasturchilar jamoasi tomonidan ishlab chiqilgan. 
                    Zamonaviy texnologiyalar va ko'p yillik tajriba asosida yaratilgan 
                    bu AI yordamchi sizning barcha ehtiyojlaringizni qondiradi.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Machine Learning
                    </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Natural Language Processing
                    </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Deep Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Homiylarimiz
            </h2>
            <p className="text-xl text-gray-600">
              Bizni qo'llab-quvvatlovchi kompaniyalar
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-200 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {sponsor.logo}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {sponsor.name}
                </h3>
                <div className="mt-4 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                  Logo uchun joy
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI bilan Ishlashni Boshlang
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bugun AI ning kuchidan foydalaning va yangi imkoniyatlarni kashf eting
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Heart className="inline-block w-5 h-5 mr-2" />
              Hoziroq Boshlash
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;