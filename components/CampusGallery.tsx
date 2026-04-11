"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const campusImages = [
  {
    src: "/images/campus-1.jpg",
    alt: "LGIHE Campus Exterior",
    title: "Our Campus",
  },
  {
    src: "/images/campus-2.jpg",
    alt: "Modern Classrooms",
    title: "Learning Spaces",
  },
  {
    src: "/images/campus-3.jpg",
    alt: "Library Facilities",
    title: "Library",
  },
  {
    src: "/images/campus-4.jpg",
    alt: "Student Activities",
    title: "Student Life",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function CampusGallery() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3d4d6f] font-medium mb-3">
            Our Campus
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#3d4d6f] leading-tight mb-4">
            A Place to Learn and Grow
          </h2>
          <p className="text-gray-600 text-lg">
            Located in Luzira along Port Bell Road, our campus provides modern facilities 
            for quality education and professional development.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusImages.map((image, i) => (
            <motion.div
              key={image.src}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#3d4d6f]/10 cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-sm">
                  {image.title}
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-[#3d4d6f] text-white rounded-full font-medium hover:bg-[#2f3d57] transition-colors"
          >
            Visit Our Campus
          </a>
        </div>
      </div>
    </section>
  );
}
