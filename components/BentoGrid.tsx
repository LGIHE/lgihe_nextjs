"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Award } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: GraduationCap,
    tag: "Academic Programs",
    title: "Comprehensive Education Programmes",
    description:
      "Diploma in Primary Education, Certificate in Early Childhood Development (ECD), Leadership Certificate for school administrators, and customized professional development trainings.",
    stat: "Multiple Programmes",
    accent: "bg-[#3d4d6f]/5",
    iconColor: "text-[#3d4d6f]",
    link: "/academics",
  },
  {
    icon: Users,
    tag: "Professional Development",
    title: "Training & Workshops",
    description:
      "Professional development trainings for school leaders, teachers, social workers, medical personnel and workshops for students and parents.",
    stat: "100+ Trainings",
    accent: "bg-[#3d4d6f]/10",
    iconColor: "text-[#3d4d6f]",
    link: "/academics",
  },
  {
    icon: BookOpen,
    tag: "Curriculum Development",
    title: "Educational Consulting",
    description:
      "Leading consultant in curricula development for the School of Education at St. Mary's College, Juba, South Sudan and other institutions.",
    stat: "Regional Impact",
    accent: "bg-[#3d4d6f]/5",
    iconColor: "text-[#3d4d6f]",
    link: "/about",
  },
  {
    icon: Award,
    tag: "Quality Assurance",
    title: "Monitoring & Evaluation",
    description:
      "Comprehensive monitoring and evaluation system to measure and improve our response to education gaps and ensure quality outcomes.",
    stat: "Continuous Improvement",
    accent: "bg-[#3d4d6f]/10",
    iconColor: "text-[#3d4d6f]",
    link: "/about",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function BentoGrid() {
  return (
    <section id="programs" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3d4d6f] font-medium mb-3">
            Our Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#3d4d6f] leading-tight mb-4">
            Grooming Early Childhood Professionals, Primary School Teachers and Entrepreneurs
          </h2>
          <p className="text-gray-600 text-lg">
            Addressing educational shortcomings through comprehensive programs and professional development
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Link href={pillar.link} key={pillar.title}>
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`group relative rounded-2xl p-8 border border-[#3d4d6f]/10 ${pillar.accent} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 border border-[#3d4d6f]/10">
                      <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                    </div>
                  </div>

                  {/* Tag */}
                  <p className="text-[11px] uppercase tracking-widest text-[#3d4d6f]/60 font-medium mb-2">
                    {pillar.tag}
                  </p>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#3d4d6f] mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#3d4d6f]/10">
                    <span className="text-sm font-semibold text-[#3d4d6f]">
                      {pillar.stat}
                    </span>
                    <span className="text-xs text-[#3d4d6f] font-medium group-hover:underline underline-offset-2">
                      Learn more →
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Theory of Change Section */}
        <div className="mt-20 bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-6">Our Theory of Change</h3>
            <p className="text-lg text-white/90 mb-6">
              IF we gaze upon the person while recognizing his/her value and dignity THEN we shall be able to 
              foster a sense of belonging that reawakens a self-awareness in front of reality.
            </p>
            <p className="text-white/80 italic">
              "Our task is to give human beings back their identity because 'the human person' is in a state of emergency." 
              <br />— Luigi Giussani, Educationalist
            </p>
            <Link href="/about" className="inline-block mt-8 px-8 py-3 bg-white text-[#3d4d6f] rounded-full font-medium hover:bg-gray-100 transition-colors">
              Learn About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
