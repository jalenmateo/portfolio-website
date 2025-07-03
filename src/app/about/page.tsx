'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-2xl mx-auto text-center">
          I&apos;m a passionate and detail oriented engineer with a solid foundation in software development and electronics. Passionate about solving complex problems and widening my horizon, I have been delving into AI, and research. My projects and experiences have been a good mix of software and hardware, with a focus on creating innovative, integrated solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Software</h3>
            <ul className="text-secondary space-y-2">
              <li>Python</li>
              <li>Julia</li>
              <li>C</li>
              <li>C++</li>
              <li>MATLAB</li>
              <li>Verilog HDL</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hardware</h3>
            <ul className="text-secondary space-y-2">
              <li>PCB Design</li>
              <li>CAD</li>
              <li>3D Printing</li>
              <li>Electronics</li>
              <li>Robotics</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>OpenCV</li>
              <li>Machine Learning</li>
              <li>Japanese (N2), Tagalog</li>
              <li>Figma</li>
              <li>LaTeX</li>
              <li>PCB Design Softwares</li>
              <li>Electronics Simulations</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Validation Engineer</h3>
            <p className="text-primary mb-2">Silicon Labs • Jul 2025 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              {/* <li>Developed code for bench tests in Python and C, executed test procedures, and prepared detailed reports in formal formats.</li> */}
              {/* <li>Enhanced test automation processes by creating batch files and Python scripts and authored comprehensive guides</li> */}
              {/* <li>Improved the ML classification and software and hardware reliability of their in-house robotic arm used for characterization</li> */}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Electrical Engineer (Intern)</h3>
            <p className="text-primary mb-2">Fabrica AI • Aug 2023 - Dec 2023</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Revamped and optimized PCB designs for a tile grouting robot, significantly enhancing reliability and operational lifespan.</li>
              <li>Enhanced test automation processes by creating batch files and Python scripts and authored comprehensive guides</li>
              <li>Joined under the Summation Programme of SGInnovate</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Research Assistant</h3>
            <p className="text-primary mb-2">SUTD • Sep 2021 - Mar 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Performed data analysis using Pandas, Matplotlib and Seaborn and ran simulations using MATLAB and Python for various research projects.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Teaching Assistant</h3>
            <p className="text-primary mb-2">SUTD • Aug 2022 - Dec 2022</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Assisted in teaching and marking scripts for multiple Calculus and Newtonian Physics classes.</li>
            </ul>
          </motion.div>
          
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering in Computer Engineering (CE)</h3>
            <p className="text-primary mb-2">Singapore University of Technology and Design • 2021 - 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Graduated with highest distinction, as top of the CE track.</li>
              <li>Minored in Artificial Intelligence (AI)</li>

            </ul>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title mt-16"
          {...fadeInUp}
        >
          Others
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <ul className="text-secondary space-y-2">
              <li>• Floquet engineering of topological phase transitions in quantum spin Hall alpha-T3 system - DOI: 10.48550/arXiv.2408.02093</li>
              <li>• Logistic Map PRNG in FPGA – DOI: 10.48550/arXiv.2404.19246 , presented at IEEE MCSoC 2024</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Volunteering</h3>
            <ul className="text-secondary space-y-2">
              <li>YouthCorps Tutoring Math to Primary Schoolers</li>
              <li>Yeah! Programme Tutoring to Primary Schoolers</li>
              <li>TJC Study Buddy Tutoring Primary Schoolers</li>
              <li>Mazarin Callisto (TJC): Defeating the Stigma against SPED Students</li>
              <li>Scouts: Organising Camps and Hikes for SPED students</li>
              <li>Beach Cleaning</li>
              <li>Donation Drives</li>
           </ul>

          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Events and Competitions</h3>
            <ul className="text-secondary space-y-2">
              <li>Keysight Engineering Challenge 2024</li>
              <li>NAAISG TikTok Challenge (LLM Focused)</li>
              <li>Roboclash Robotics Challenge 2023 and 2024</li>
              <li>PMI Student Challenge</li>
              <li>Kris App Challenge</li>
              <li>MIT 15K Challenge</li>
              <li>NLB X SUTD Collaboration Signing (Presenter)</li>
              <li>IPS Singapore Conference (Presenter)</li>
           </ul>

          </motion.div>

          {/* Add more cards here if needed */}
        </motion.div>

      </motion.section>

    </div>
  )
} 