import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Github, Linkedin, Moon, Sun, ChevronDown } from 'lucide-react';

// Theme Context
const ThemeContext = React.createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({ isDark: false, toggleTheme: () => {} });

// Components
const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id={id}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      {children}
    </motion.section>
  );
};

const TeamMember = ({ name, role, image, linkedin, github }: { 
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
}) => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <div className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-colors duration-300 ${
      isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
    }`}>
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />
      <h3 className={`text-xl font-semibold ${isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'}`}>{name}</h3>
      <p className={`mb-4 ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>{role}</p>
      <div className="flex space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#FF2E63] hover:text-[#FF4778] transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className={isDark ? 'text-[#E2E2FF] hover:text-white' : 'text-[#1A1A2E] hover:text-[#4B4B6D]'}>
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <div className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
      isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
    }`}>
      <h3 className="text-2xl font-bold text-[#FF2E63] mb-2">{value}</h3>
      <p className={isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}>{label}</p>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  // Add GitHub repo URL
  const githubRepoUrl = 'https://github.com/kamallochan2004/EdgeAI-Object-Detection';
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/research-paper.pdf';
    link.download = 'ESP32-CAM-Object-Detection-Research.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGithubRepo = () => {
    window.open(githubRepoUrl, '_blank');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F1A]' : 'bg-[#F8F8FF]'
      }`}>
        {/* Theme Toggle and GitHub buttons */}
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <button
            onClick={openGithubRepo}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-[#1A1A2E] text-[#E2E2FF] hover:bg-[#252542]' 
                : 'bg-white text-[#1A1A2E] hover:bg-[#F0F0F7]'
            }`}
            aria-label="View GitHub Repository"
          >
            <Github className="w-6 h-6" />
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-[#1A1A2E] text-[#FF2E63] hover:bg-[#252542]' 
                : 'bg-white text-[#FF2E63] hover:bg-[#F0F0F7]'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        {/* Hero Section */}
        <Section id="hero">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
                  isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'
                }`}>
                  Real-time Object Detection using ESP32-CAM
                </h1>
                <p className={`text-xl mb-8 transition-colors duration-300 ${
                  isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'
                }`}>
                  Pioneering edge AI implementation for real-time object detection using ESP32-CAM hardware, 
                  achieving remarkable accuracy while maintaining minimal latency and power consumption.
                </p>
                <a href="#highlights" className="inline-flex items-center gap-2 text-[#FF2E63] hover:text-[#FF4778] transition-colors">
                  Learn More <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="h-[500px] relative rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#1A1A2E] to-[#252542]">
              <Spline scene="https://prod.spline.design/F0o6BsNNpC3fpD65/scene.splinecode" />
              </div>
            </div>
          </div>
        </Section>

        {/* Highlights */}
        <Section id="highlights">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Stat value="95%" label="Detection Accuracy" />
              <Stat value="30ms" label="Inference Time" />
              <Stat value="2W" label="Power Consumption" />
            </div>
            
            <div className={`grid md:grid-cols-2 gap-8 ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>
              <div className={`p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'}`}>Key Features</h3>
                <ul className="space-y-4">
                  <li>• Real-time object detection on a low-cost device</li>
                  <li>• Edge AI implementation without cloud processing</li>
                  <li>• YOLO model optimization using Edge Impulse</li>
                  <li>• High accuracy and efficiency in detection</li>
                </ul>
              </div>
              <div className={`p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'}`}>Applications</h3>
                <ul className="space-y-4">
                  <li>• Smart surveillance systems</li>
                  <li>• IoT-based automation</li>
                  <li>• Real-time monitoring</li>
                  <li>• Portable AI devices</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Demo Section */}
        <Section id="demo">
          <div className="container mx-auto max-w-7xl">
            <div className="aspect-w-16 aspect-h-9 mb-12">
              <div className="w-full max-w-4xl mx-auto bg-[#1A1A2E] rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/4Ohx8FcV1B0?si=bM7kGGWkdLD_wJcE"
                  title="ESP32-CAM Object Detection Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'}`}>Video Overview</h3>
              <ul className={`space-y-2 ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>
                <li>0:00 - Project Overview & Components Required</li>
                <li>1:19 - Programming Setup</li>
                <li>6:21 - Live Detection Demo</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Paper Section */}
        <Section id="paper">
          <div className="container mx-auto max-w-7xl">
            <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg transition-all duration-300 ${
              isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
            }`}>
              <div className="flex justify-center mb-8">
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-[#FF2E63] text-white px-6 py-3 rounded-lg hover:bg-[#FF4778] transition-colors transform hover:scale-105 active:scale-95 duration-200"
                >
                  <Download className="w-5 h-5" />
                  Download Paper
                </button>
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#E2E2FF]' : 'text-[#1A1A2E]'}`}>Abstract</h3>
              <p className={`mb-6 ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>
                This paper presents a novel approach to implementing real-time object detection on resource-constrained 
                edge devices using the ESP32-CAM platform. We demonstrate how optimized TinyML models can achieve 
                high accuracy while maintaining minimal latency and power consumption, making it suitable for IoT 
                applications.
              </p>            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section id="team">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="Kamallochan Das"
                role="Project Lead"
                image="https://pbs.twimg.com/profile_images/1892066878455005186/1BkXxFGL_400x400.jpg"
                linkedin="https://www.linkedin.com/in/kamallochan--das/"
                github="https://github.com/kamallochan2004"
              />
              <TeamMember
                name="Ayush Kachhap"
                role="Researcher"
                image="https://i.imghippo.com/files/alls1924YmU.png"
                linkedin="https://www.linkedin.com/in/ayush-kachhap-6a682a238/"
                github="https://github.com/Insane30"
              />
              <TeamMember
                name="Madhav Bhardwaj"
                role="ML Engineer"
                image="https://drive.google.com/file/d/1fHzjlsnOe4byK0AYs6pjbfXorVY1Jw_g/view?usp=drive_link"
                linkedin="https://www.linkedin.com/in/madhav-bhardwaj-b27976266/"
                github="https://github.com/madhavwaj"
              />
              <TeamMember
                name="Inderjeet Singh"
                role="Logistics"
                image="https://cdn3d.iconscout.com/3d/premium/thumb/indian-man-3d-icon-download-in-png-blend-fbx-gltf-file-formats--punjabi-sikh-culture-asian-person-character-metapeople-pack-people-icons-4159829.png?f=webp"
                linkedin=""
                github=""
              />
            </div>
          </div>
        </Section>

        {/* Navigation */}
        <nav className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 ${
          isDark ? 'bg-[#1A1A2E] border border-[#4B4B6D]' : 'bg-white border border-[#E5E7EB]'
        }`}>
          <ul className="flex space-x-6">
            <li><a href="#hero" className={`hover:text-[#FF2E63] transition-colors ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>Home</a></li>
            <li><a href="#highlights" className={`hover:text-[#FF2E63] transition-colors ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>Features</a></li>
            <li><a href="#demo" className={`hover:text-[#FF2E63] transition-colors ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>Demo</a></li>
            <li><a href="#paper" className={`hover:text-[#FF2E63] transition-colors ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>Paper</a></li>
            <li><a href="#team" className={`hover:text-[#FF2E63] transition-colors ${isDark ? 'text-[#B8B8D1]' : 'text-[#4B4B6D]'}`}>Team</a></li>
          </ul>
        </nav>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;