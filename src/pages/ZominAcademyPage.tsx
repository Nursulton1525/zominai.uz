import React from 'react';
import { Building, Users, Award, BookOpen, Globe, Zap, Target, Star } from 'lucide-react';

const ZominAcademyPage = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Zamonaviy Ta'lim",
      description: "Eng so'nggi texnologiyalar va metodlar asosida ta'lim"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional O'qituvchilar",
      description: "Soha mutaxassislari tomonidan o'qitish"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Xalqaro Standartlar",
      description: "Dunyo standartlariga mos ta'lim dasturlari"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Sertifikatlar",
      description: "Kurslarni tugatgach maxsus sertifikatlar"
    }
  ];

  const stats = [
    { number: "1000+", label: "Talabalar" },
    { number: "50+", label: "Kurslar" },
    { number: "95%", label: "Ish Bilan Ta'minlash" },
    { number: "4.9", label: "Reyting" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
              <Building className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Zomin Academy
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IT Park Zomin - O'zbekistondagi eng yirik IT ta'lim markazlaridan biri. 
            Biz zamonaviy texnologiyalar sohasida malakali kadrlar tayyorlash bilan shug'ullanamiz.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                IT Park Zomin Haqida
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IT Park Zomin 2020-yilda tashkil etilgan bo'lib, bugungi kunda O'zbekistondagi 
                eng ko'p talabaga ega bo'lgan IT ta'lim markazlaridan biridir. Bizning maqsadimiz 
                - mamlakatimizda IT sohasini rivojlantirish va malakali kadrlar tayyorlashdir.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Biz turli yo'nalishlar bo'yicha kurslar taklif etamiz: dasturlash, web-dizayn, 
                mobil ilovalar yaratish, sun'iy intellekt, ma'lumotlar tahlili va boshqa ko'plab 
                zamonaviy texnologiyalar.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Mobile Development
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  AI & Machine Learning
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Bizning Missiyamiz</h3>
                <p className="text-blue-100 mb-6">
                  O'zbekistonda IT sohasini rivojlantirish va dunyoning eng yaxshi 
                  universitetlari darajasida ta'lim berish.
                </p>
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6" />
                  <span className="font-semibold">2030-yilgacha 10,000+ mutaxassis tayyorlash</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="h-12 w-12 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nima Uchun Bizni Tanlash Kerak?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Biz Bilan Bog'laning
            </h2>
            <p className="text-xl text-gray-600">
              Zomin shahrining markazida joylashgan zamonaviy bino
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manzil</h3>
              <p className="text-gray-600">Zomin shahri, IT Park binosi</p>
            </div>
            <div className="p-6">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">+998 (90) 123-45-67</p>
            </div>
            <div className="p-6">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@zominacademy.uz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZominAcademyPage;