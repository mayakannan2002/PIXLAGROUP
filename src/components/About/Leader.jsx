import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

// Asset Imports
import L1 from "./../../assets/Home/L1.png";
import L2 from "./../../assets/Home/L2.png";
import L3 from "./../../assets/Home/L3.png";    
import L4 from "./../../assets/Home/L4.png";
import L5 from "./../../assets/Home/L5.png";
import L6 from "./../../assets/Home/L6.png";
import L7 from "./../../assets/Home/L7.png";
import L8 from "./../../assets/Home/L8.png";

const LandingPage = () => {
  const teamMembers = [
    {
      name: "Rajasekar Sundaresan",
      role: "Founder & CEO",  
      desc: "Leads company vision, strategy, and growth while driving innovation and business success.",
      img: L1
    },
    {
      name: "Murali Sundaresan",
      role: "Founder & Director",
      desc: "Spearheading vision, strategy, and sustainable growth while ensuring operational excellence.",
      img: L2
    },
    {
      name: "Abhishek Jain",
      role: "Director & Chief Compliance Officer",
      desc: "Ensuring regulatory compliance, ethical governance, and effective risk management while supporting strategic leadership.",
      img: L3
    },
    {
      name: "Bharath Jain",
      role: "Chief Financial Officer",
      desc: "Managing the company's financial strategy, planning, and performance while ensuring sustainable growth and fiscal discipline.",
      img: L4
    },
    {
      name: "Nithesh Jain",
      role: "Director & Investor",
      desc: "Providing strategic leadership and financial backing to drive sustainable growth and long-term success.",
      img: L5
    },
    {
      name: "Murugan",
      role: "Lead Product Engineer",
      desc: "Leading product development, ensuring quality engineering, and delivering scalable, user-focused solutions.",
      img: L6
    },
    {
      name: "Mayakannan",
      role: "Senior Software Developer",
      desc: "Designing, developing, and maintaining high-quality software solutions with a focus on performance and scalability.",
      img: L7
    },
    {
      name: "Vijay Sekar",
      role: "Product Designer",
      desc: "Designing intuitive and user-centric experiences that enhance product usability and engagement.",
      img: L8
    }
  ];

  return (
    <div className="w-full font-sans antialiased scroll-smooth">
      
      {/* --- SECTION 1: EXECUTIVE PROFILE (WHITE BG) --- */}
      <section id="founder" className="bg-white py-20 px-6 md:px-12 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto ">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* CEO Profile Image */}
            <div className="w-full lg:w-[40%]">
              <div className="w-full rounded-[40px] overflow-hidden shadow-sm aspect-[4/5] max-h-[650px] bg-gray-50">
                <img
                  src={L1} 
                  alt="Rajasekar Sundaresan - Founder & CEO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="w-full lg:w-[60%]">
              <div className="mb-6">
                <span className="bg-[#FEF6E7] text-[#D4AF37] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Founder & Executive Leadership
                </span>
              </div>

              <h1 className="text-[42px] lg:text-[52px] font-extrabold text-[#1A202C] leading-tight mb-2">
                Rajasekar Sundaresan
              </h1>
              <p className="text-lg text-gray-500 font-medium mb-6">
                Founder & Chief Executive Officer
              </p>

              {/* Social Icons */}
              <div className="flex gap-5 mb-10 text-gray-400">
                <a href="#" className="hover:text-[#D4AF37] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors"><Mail size={20} /></a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors"><Phone size={20} /></a>
              </div>

              <div className="space-y-6 text-[#4A5568] leading-relaxed text-[17px]">
                <p>
                  Rajasekar Sundaresan is a visionary entrepreneur with deep expertise in 
                  technology, finance, and business strategy. He founded Pixla Gold Corporation 
                  with the mission of creating India's first fully integrated gold ecosystem.
                </p>
                <p>
                  Under his leadership, Pixla has grown into a multi-vertical enterprise spanning 
                  exploration, mining, refining, bullion trading, finance, retail, and ESG initiatives.
                </p>
              </div>

              {/* Quote Block */}
              <div className="mt-12 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4AF37]"></div>
                <div className="bg-[#F7FAFC] p-8 rounded-r-xl">
                  <p className="text-[#2D3748] text-[18px] leading-relaxed italic font-medium">
                    "Our vision is not just to participate in the industry, but to 
                    redefine it. By creating India's first fully integrated gold 
                    ecosystem, we are embedding transparency, innovation, and 
                    positive social impact."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LEADERSHIP TEAM (BLACK BG) --- */}
      <section id="leadership" className="bg-black text-white py-24 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.4em] mb-8">
            Leadership Team
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-[15px] leading-relaxed mb-20">
            Pixla Gold Corporation is led by a team of experienced professionals with expertise in gold 
            trading, finance, technology, operations, and ESG initiatives:
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                
                {/* Image Wrapper Fix */}
                <div className="mb-6 w-full max-w-[260px] lg:max-w-none aspect-square overflow-hidden rounded-2xl bg-zinc-900">
                  <img 
                    src={member.img} 
                    alt={`${member.name} - ${member.role}`} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-1 tracking-wide">{member.name}</h3>
                <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider mb-4 h-8 flex items-center justify-center text-center">
                  {member.role}
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed px-4">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;