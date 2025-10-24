import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE - CONTENT */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Us</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a dynamic organization committed to innovation, excellence,
            and customer satisfaction. Since our establishment, we’ve been
            delivering world-class solutions across industries, blending
            creativity with cutting-edge technology.
          </p>

          {/* DETAILS SECTION */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Established</h3>
              <p className="text-gray-600">
                Founded in <strong>2010</strong>, we started with a vision to
                empower businesses through technology-driven transformation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
              <p className="text-gray-600">
                To deliver innovative, sustainable, and scalable solutions that
                help organizations achieve their goals efficiently and ethically.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
              <p className="text-gray-600">
                To be a globally recognized leader in providing intelligent
                business and technology solutions that transform industries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600">Management</h3>
              <p className="text-gray-600">
                Our management team is driven by innovation, integrity, and
                excellence — leading a talented workforce that shares the same
                vision for growth and customer success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE / MODEL */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
