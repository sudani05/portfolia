import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Cross as Process, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        
        <div className="absolute top-8 left-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors bg-gray-900/50 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Calendar className="text-cyan-400" size={24} />
              <div>
                <div className="text-sm text-gray-400">Year</div>
                <div className="text-white font-semibold">{project.year}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="text-cyan-400" size={24} />
              <div>
                <div className="text-sm text-gray-400">Role</div>
                <div className="text-white font-semibold">{project.role}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Overview</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Process className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Process</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <div className="space-y-4">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Outcome</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.outcome}
                </p>
                {project.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Other Projects</h3>
              <div className="space-y-4">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map((otherProject) => (
                    <Link
                      key={otherProject.id}
                      to={`/project/${otherProject.id}`}
                      className="block bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50"
                    >
                      <h4 className="text-white font-semibold mb-2">{otherProject.title}</h4>
                      <p className="text-gray-400 text-sm">{otherProject.description}</p>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;