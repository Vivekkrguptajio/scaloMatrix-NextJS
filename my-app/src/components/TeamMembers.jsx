"use client";
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "01",
    name: "Adi",
    role: "Founder & Lead Strategist",
    image: "/team/adi.png",
  },
  {
    id: "02",
    name: "Shreyas",
    role: "Design & Branding",
    image: "/team/shreyas.png",
  },
  {
    id: "03",
    name: "Nayan",
    role: "Website Developer",
    image: "/team/nayan.png",
  },
  {
    id: "04",
    name: "Yadu",
    role: "Project Manager",
    image: "/team/yadu.png",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-16 md:py-24 bg-white text-black font-sans">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-8 w-full">
        
        {/* Header Section */}
        <div className="w-full text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black"
          >
            Meet The Team
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {teamMembers.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col text-left group cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-square md:h-[400px] lg:h-[430px] rounded-3xl overflow-hidden mb-4 bg-gray-100 shadow-md border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-1.5">
                {item.name}
              </h3>
              <p className="text-base md:text-lg text-gray-500 font-medium">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
