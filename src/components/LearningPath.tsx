
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, PlayCircle, Brain, Target, Zap, Waves } from 'lucide-react';

const LEARNING_STAGES = [
  {
    title: "Foundations",
    topics: ["Python Mastery", "NumPy & Pandas", "Statistics for Data Science"],
    status: "completed",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Data Engineering",
    topics: ["Data Cleaning", "Feature Engineering", "Exploratory Data Analysis"],
    status: "completed",
    icon: <Waves className="w-6 h-6" />
  },
  {
    title: "Supervised Learning",
    topics: ["Linear & Logistic Regression", "Decision Trees", "SVM & KNN"],
    status: "current",
    description: "Currently deep-diving into predictive modeling and algorithm optimization.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Unsupervised & Advanced",
    topics: ["Clustering (K-Means)", "PCA", "Neural Networks Intro"],
    status: "upcoming",
    icon: <Target className="w-6 h-6" />
  }
];

export default function LearningPath() {
  return (
    <section id="learning-path" className="py-24 px-6 md:px-12 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Machine Learning Roadmap</h3>
          </div>
          <p className="text-white/40 font-mono text-sm">
            Current Status: <span className="text-cyan-400">#Supervised_Learning</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEARNING_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
                stage.status === 'current' 
                  ? 'bg-cyan-500/10 border-cyan-500/30' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {stage.status === 'current' && (
                <div className="absolute top-0 right-0 p-4">
                  <PlayCircle className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                stage.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                stage.status === 'current' ? 'bg-cyan-500/20 text-cyan-400' :
                'bg-white/5 text-white/20'
              }`}>
                {stage.icon}
              </div>

              <h4 className="text-xl font-bold mb-4">{stage.title}</h4>
              
              <ul className="space-y-3 mb-6">
                {stage.topics.map(topic => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-white/40">
                    {stage.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                    ) : (
                      <Circle className="w-4 h-4 text-white/10" />
                    )}
                    {topic}
                  </li>
                ))}
              </ul>

              {stage.description && (
                <p className="text-xs font-mono text-cyan-400/60 mt-4 pt-4 border-t border-cyan-500/20">
                  {stage.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
