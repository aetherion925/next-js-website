'use client';

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks and technologies.',
      features: ['Frontend', 'Backend', 'Database'],
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS', 'Android', 'React Native'],
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
      features: ['Machine Learning', 'Chatbot AI', 'Automated Workflow'],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      features: ['AWS', 'Azure', 'Google Cloud'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['Figma', 'WordPress', 'Prototyping'],
    },
    {
      icon: '⚙️',
      title: 'DevOps & Automation',
      description: 'Streamlined development processes with CI/CD and automation tools.',
      features: ['Docker', 'GitHub Actions', 'CI/CD'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer border border-transparent hover:border-[#3b4476]/20"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-[#3b4476] text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:bg-[#2d3358] cursor-pointer"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}