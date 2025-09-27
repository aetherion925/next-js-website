'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  const techCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      technologies: [
        { name: 'React', icon: '/tech_stack/react.svg', url: 'https://react.dev/' },
        { name: 'Vue.js', icon: '/tech_stack/vue.svg', url: 'https://vuejs.org/' },
        { name: 'Next.js', icon: '/tech_stack/nextjs-icon.svg', url: 'https://nextjs.org/' },
        { name: 'TypeScript', icon: '/tech_stack/typescript.svg', url: 'https://www.typescriptlang.org/' },
        { name: 'JavaScript', icon: '/tech_stack/javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'HTML5', icon: '/tech_stack/html-5.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', icon: '/tech_stack/css-3.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Tailwind', icon: '/tech_stack/tailwind.svg', url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      technologies: [
        { name: 'Node.js', icon: '/tech_stack/nodejs.svg', url: 'https://nodejs.org/' },
        { name: 'Python', icon: '/tech_stack/python.svg', url: 'https://www.python.org/' },
        { name: 'FastAPI', icon: '/tech_stack/fastapi-icon.svg', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Java', icon: '/tech_stack/java.svg', url: 'https://docs.oracle.com/en/java/' },
        { name: 'C#', icon: '/tech_stack/csharp.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { name: '.NET', icon: '/tech_stack/dotnet.svg', url: 'https://learn.microsoft.com/en-us/dotnet/' },
        { name: 'C++', icon: '/tech_stack/c-plusplus.svg', url: 'https://isocpp.org/' },
        { name: 'PHP', icon: '/tech_stack/php.svg', url: 'https://www.php.net/' },
      ],
    },
    {
      title: 'Database',
      icon: '🗄️',
      technologies: [
        { name: 'MongoDB', icon: '/tech_stack/mongodb-icon.svg', url: 'https://www.mongodb.com/docs/' },
        { name: 'PostgreSQL', icon: '/tech_stack/postgresql.svg', url: 'https://www.postgresql.org/docs/' },
        { name: 'MySQL', icon: '/tech_stack/mysql-icon.svg', url: 'https://dev.mysql.com/doc/' },
        { name: 'SQLite', icon: '/tech_stack/sqlite.svg', url: 'https://sqlite.org/docs.html' },
        { name: 'Firebase', icon: '/tech_stack/firebase-icon.svg', url: 'https://firebase.google.com/docs' },
        { name: 'DynamoDB', icon: '/tech_stack/aws-dynamodb.svg', url: 'https://docs.aws.amazon.com/dynamodb/' },
        { name: 'AWS S3', icon: '/tech_stack/aws-s3.svg', url: 'https://docs.aws.amazon.com/s3/' },
      ],
    },
    {
      title: 'AI & ML',
      icon: '🤖',
      technologies: [
        { name: 'OpenAI', icon: '/tech_stack/openai.svg', url: 'https://platform.openai.com/docs' },
        { name: 'TensorFlow', icon: '/tech_stack/tensorflow.svg', url: 'https://www.tensorflow.org/' },
        { name: 'PyTorch', icon: '/tech_stack/pytorch-icon.svg', url: 'https://pytorch.org/' },
        { name: 'Mistral AI', icon: '/tech_stack/mistral-ai-icon.svg', url: 'https://docs.mistral.ai/' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      technologies: [
        { name: 'AWS', icon: '/tech_stack/aws.svg', url: 'https://docs.aws.amazon.com/' },
        { name: 'Azure', icon: '/tech_stack/microsoft-azure.svg', url: 'https://docs.microsoft.com/en-us/azure/' },
        { name: 'Docker', icon: '/tech_stack/docker.svg', url: 'https://docs.docker.com/' },
        { name: 'Vercel', icon: '/tech_stack/vercel-icon.svg', url: 'https://vercel.com/docs' },
        { name: 'Lambda', icon: '/tech_stack/aws-lambda.svg', url: 'https://docs.aws.amazon.com/lambda/' },
        { name: 'AppFlow', icon: '/tech_stack/aws-appflow.svg', url: 'https://docs.aws.amazon.com/appflow/' },
      ],
    },
    {
      title: 'Mobile',
      icon: '📱',
      technologies: [
        { name: 'Flutter', icon: '/tech_stack/flutter.svg', url: 'https://docs.flutter.dev/' },
        { name: 'Ionic', icon: '/tech_stack/ionic-icon.svg', url: 'https://ionicframework.com/docs' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies we use to build amazing solutions
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center bg-gray-100 p-2">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-4 py-3 m-1 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-[#3b4476] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-[#3b4476]'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-3">
                <span className="text-4xl">{techCategories[activeCategory].icon}</span>
                <span>{techCategories[activeCategory].title} Development</span>
              </h3>
              <div className="w-24 h-1 bg-[#3b4476] mx-auto rounded-full"></div>
            </div>

            {/* Technology Grid with Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techCategories[activeCategory].technologies.map((tech, techIndex) => (
                <a
                  key={`${activeCategory}-${techIndex}`}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group animate-fadeIn"
                  style={{ animationDelay: `${techIndex * 50}ms` }}
                >
                  <div className="w-16 h-16 mb-4 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center group-hover:text-[#3b4476] transition-colors duration-300">
                    {tech.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Category Stats */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-[#3b4476]">
                  {techCategories[activeCategory].technologies.length}
                </span>{' '}
                technologies in {techCategories[activeCategory].title}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Explore our comprehensive technology stack across{' '}
            <span className="font-semibold text-[#3b4476]">{techCategories.length}</span> categories
          </p>
          <div className="flex justify-center space-x-2">
            {techCategories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCategory === index ? 'bg-[#3b4476] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}