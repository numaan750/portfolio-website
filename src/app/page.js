import ContactSection from '@/Component/ContactSection';
import Footer from '@/Component/Footer';
import ResumeSection from '@/Component/ResumeSection';
import ServicesSection from '@/Component/ServicesSection';
import TestimonialsSection from '@/Component/TestimonialsSection';
import Home from '@/Component/Home'
import React from 'react'
import AboutSection from '@/Component/Aboutus';
import WhatIDoSection from '@/Component/Whaticando';
import SkillsSection from '@/Component/Skills';
import Navbar from '@/Component/Navbar';
import ProjectSection from '@/Component/projectSection';


const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutSection />
      <WhatIDoSection />
      <SkillsSection />
      <ProjectSection />
      
     <TestimonialsSection />
     <ResumeSection />
     <ServicesSection />
     <ContactSection />
     <Footer />
    </div>
  );
}

export default page