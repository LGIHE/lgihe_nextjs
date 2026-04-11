"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users, ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const programLevels = [
  {
    title: "Certificate Programs",
    description: "Short-term professional development courses designed to enhance specific skills and competencies.",
    icon: BookOpen,
    href: "/academics/certificate",
    duration: "6-12 months",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Diploma Programs",
    description: "Comprehensive programs that provide in-depth knowledge and practical skills for career advancement.",
    icon: Award,
    href: "/academics/diploma",
    duration: "1-2 years",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Undergraduate Programs",
    description: "Bachelor's degree programs that combine theoretical knowledge with practical application.",
    icon: GraduationCap,
    href: "/academics/undergraduate",
    duration: "3-4 years",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Postgraduate Programs",
    description: "Advanced programs for professionals seeking specialized expertise and leadership skills.",
    icon: Users,
    href: "/academics/postgraduate",
    duration: "1-2 years",
    color: "from-orange-500 to-orange-600",
  },
];

const schools = [
  {
    name: "School of Education",
    description: "Preparing transformative educators and leaders",
    href: "/academics/schools/education",
    programs: ["Teacher Education", "Educational Leadership", "Early Childhood Education"],
  },
  {
    name: "School of Arts",
    description: "Fostering creativity and critical thinking",
    href: "/academics/schools/arts",
    programs: ["Humanities", "Social Sciences", "Languages"],
  },
  {
    name: "School of Science",
    description: "Advancing scientific knowledge and innovation",
    href: "/academics/schools/science",
    programs: ["Natural Sciences", "Mathematics", "Technology"],
  },
  {
    name: "School of Business",
    description: "Developing ethical business leaders",
    href: "/academics/schools/business",
    programs: ["Management", "Entrepreneurship", "Finance"],
  },
];

const features = [
  "Experienced and qualified faculty",
  "Modern learning facilities",
  "Practical hands-on training",
  "Industry partnerships",
  "Flexible learning schedules",
  "Career support services",
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-medium mb-4">
              Academic Excellence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Discover our comprehensive range of academic programs designed to transform 
              education in Uganda and across Africa through excellence, innovation, and 
              professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d4d6f] mb-4">
              Our Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of programs tailored to your educational and career goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.title}
                  custom={index * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href={level.href}>
                    <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color} rounded-t-2xl`} />
                      
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${level.color} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#3d4d6f] mb-1 group-hover:text-[#2f3d57] transition-colors">
                            {level.title}
                          </h3>
                          <p className="text-sm text-gray-500">Duration: {level.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {level.description}
                      </p>
                      
                      <div className="flex items-center text-[#3d4d6f] font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d4d6f] mb-4">
              Our Schools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our specialized schools offering diverse academic disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schools.map((school, index) => (
              <motion.div
                key={school.name}
                custom={index * 0.1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={school.href}>
                  <div className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <h3 className="text-xl font-bold text-[#3d4d6f] mb-2 group-hover:text-[#2f3d57] transition-colors">
                      {school.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{school.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {school.programs.map((program) => (
                        <span
                          key={program}
                          className="text-xs px-3 py-1 bg-[#3d4d6f]/10 text-[#3d4d6f] rounded-full"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/academics/schools"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#3d4d6f] text-white rounded-full font-medium hover:bg-[#2f3d57] transition-colors"
            >
              View All Schools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose LGIHE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d4d6f] mb-6">
                Why Choose LGIHE?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Luigi Giussani Institute of Higher Education, we are committed to 
                providing quality education that transforms lives and communities. Our 
                programs are designed to meet the needs of modern educators and professionals.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    custom={index * 0.05}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <Link
                  href="/academics/programmes"
                  className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Browse All Programs</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <Link
                  href="/admissions/requirements"
                  className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Admission Requirements</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <Link
                  href="/admissions/fees"
                  className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Tuition & Fees</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <Link
                  href="/admissions/apply"
                  className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of students who have transformed their careers through our programs. 
              Take the first step towards your educational goals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="px-8 py-3 bg-white text-[#3d4d6f] rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
