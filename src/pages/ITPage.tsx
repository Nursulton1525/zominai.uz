import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  Code,
  Layers,
  Network,
  Bot
} from 'lucide-react';

const ITPage = () => {
  const itFields = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Veb-saytlar va veb-ilovalar yaratish. HTML, CSS, JavaScript, React, Node.js va boshqa zamonaviy texnologiyalar.",
      skills: ["Frontend", "Backend", "Full-Stack"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Android va iOS uchun mobil ilovalar yaratish. React Native, Flutter, Swift, Kotlin texnologiyalari.",
      skills: ["Android", "iOS", "Cross-Platform"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      description: "Ma'lumotlarni tahlil qilish, machine learning, big data va sun'iy intellekt sohasidagi ishlar.",
      skills: ["Python", "R", "SQL", "Machine Learning"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Computing",
      description: "Bulutli hizmatlar, server infratuzilmasi, DevOps va cloud arxitekturasi.",
      skills: ["AWS", "Azure", "Google Cloud", "Docker"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Axborot xavfsizligi, tarmoq himoyasi, ethical hacking va xavfsizlik auditlari.",
      skills: ["Network Security", "Ethical Hacking", "Compliance"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Artificial Intelligence",
      description: "Sun'iy intellekt, neural networks, deep learning va AI-powered ilovalar yaratish.",
      skills: ["Deep Learning", "NLP", "Computer Vision"]
    }
  ];

  const trends = [
    "Artificial Intelligence va Machine Learning",
    "Blockchain va Cryptocurrency",
    "Internet of Things (IoT)",
    "5G va Edge Computing",
    "Quantum Computing",
    "Augmented va Virtual Reality"
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Yuqori Maosh",
      description: "IT mutaxassislari eng yuqori maosh oladigan kasblardan biri"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Imkoniyatlar",
      description: "Butun dunyo bo'ylab ishlash imkoniyati"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Doimiy Rivojlanish",
      description: "Har doim yangi texnologiyalar va imkoniyatlar"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Keng Tarmoq",
      description: "Professional tarmoq va hamkorlik imkoniyatlari"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl animate-pulse">
              <Monitor className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              IT Soha Haqida
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Information Technology (IT) - bu zamonaviy dunyoning asosi. Ma'lumotlar texnologiyasi 
            barcha hayot sohalarini qamrab olgan va kelajakda yanada muhim bo'lib qoladi.
          </p>
        </div>

        {/* What is IT Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-blue-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            IT Nima?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Information Technology (IT)</strong> - bu kompyuter tizimlari, dasturiy ta'minot, 
                tarmoqlar va elektron ma'lumotlarni saqlash, qayta ishlash, uzatish va olish uchun 
                ishlatiladigan barcha texnologiyalarni o'z ichiga oladi.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IT soha quyidagi asosiy yo'nalishlarni o'z ichiga oladi:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dasturiy ta'minot ishlab chiqish (Software Development)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tarmoq va infratuzilma (Network & Infrastructure)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ma'lumotlar bazasi va tahlil (Database & Analytics)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Axborot xavfsizligi (Cybersecurity)</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">IT ning Ahamiyati</h3>
                <div className="space-y-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5" />
                    <span>Biznesni avtomatlashtirish</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Global aloqa va hamkorlik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5" />
                    <span>Katta hajmdagi ma'lumotlarni boshqarish</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Innovatsiyalar va yangi texnologiyalar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IT Fields */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            IT Sohasining Asosiy Yo'nalishlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itFields.map((field, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                  {field.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {field.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {field.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {field.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Trends */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 mb-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-8">
            Hozirgi Tendentsiyalar
          </h2>
          <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
            IT sohasida eng so'nggi va istiqbolli yo'nalishlar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((trend, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-blue-100 font-medium">{trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            IT Sohasining Afzalliklari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-blue-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            IT Sohasiga Qiziqasizmi?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Zamonaviy dunyoning eng istiqbolli sohasida o'z karyerangizni boshlang. 
            Bizning kurslarimiz orqali professional IT mutaxassis bo'ling.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Kurslarimizni Ko'ring
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITPage;