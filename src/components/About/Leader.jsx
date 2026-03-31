import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const LandingPage = () => {
  const teamMembers = [
    {
      name: "Rajasekar Sundaresan",
      role: "Chief Executive Officer",
      desc: "Leads company vision, strategy, and growth while driving innovation and business success.",
      img: "/path-to-image1.jpg"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      desc: "With 15+ years of engineering experience, David leads our core platform development.",
      img: "/path-to-image2.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      desc: "Marcus is obsessed with user experience and aligns our product goals with customer needs.",
      img: "/path-to-image3.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Design Director",
      desc: "Award-winning designer shaping our brand identity and user interface aesthetics.",
      img: "/path-to-image4.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Head of Marketing",
      desc: "Growth expert who scales our market presence and drives global campaigns.",
      img: "/path-to-image5.jpg"
    },
    {
      name: "Mayakannan",
      role: "Senior Software Developer",
      desc: "Develops efficient, secure software solutions and ensures smooth performance across web platforms.",
      img: "/path-to-image6.jpg"
    },
    {
      name: "Vijay Sekar",
      role: "Product Designer",
      desc: "Designs intuitive, user-friendly websites aligned with business goals and user needs.",
      img: "/path-to-image7.jpg"
    }
  ];

  return (
    <div className="w-full font-sans antialiased scroll-smooth">
      
      {/* --- SECTION 1: EXECUTIVE PROFILE (WHITE BG) --- */}
      {/* Added id="founder" for navigation */}
      <section id="founder" className="bg-white py-20 px-6 md:px-12 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto ">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Profile Image */}
            <div className="w-full lg:w-[40%]">
              <img
                src="/path-to-ceo.jpg"
                alt="Rajasekar Sundaresan"
                className="w-full rounded-[40px] shadow-sm object-cover aspect-[4/5]"
              />
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
      {/* Added id="leadership" for navigation */}
      <section id="leadership" className="bg-black text-white py-20 px-6 md:px-12 scroll-mt-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="mb-6 w-full max-w-[240px] lg:max-w-none">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 tracking-wide">{member.name}</h3>
                <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-[13px] leading-snug px-2">
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