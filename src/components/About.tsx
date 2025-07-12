import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Users, Clock } from 'lucide-react';
import { skills } from '../data/skills';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '1+' },
    { icon: Users, label: 'Projects Completed', value: '10+' },
    { icon: Clock, label: 'Hours Coded', value: '1K+' },
  ];

  const skillCategories = ['Programming', 'Data Science', 'AI/ML', 'DevOps'] as const;

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent)] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about turning complex data into actionable insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate data scientist and developer with over 5 years of experience in building intelligent systems that solve real-world problems. My journey spans across machine learning, artificial intelligence, and full-stack development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating end-to-end solutions that bridge the gap between complex data and meaningful business insights. From predictive models to interactive dashboards, I love crafting systems that make data accessible and actionable.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-2">
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div id="skills">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              
              {skillCategories.map((category) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">{category}</h4>
                  <div className="space-y-3">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;