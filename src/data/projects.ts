import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection',
    description: 'AI Model for Content Verification',
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'NLP', 'Machine Learning', 'TensorFlow'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'AI/ML',
    year: '2024',
    role: 'Lead Data Scientist',
    overview: 'Developed an advanced machine learning model to detect fake news using natural language processing techniques. The system analyzes article content, source credibility, and linguistic patterns to determine authenticity.',
    process: [
      'Data collection from multiple news sources',
      'Feature engineering and text preprocessing',
      'Model training using ensemble methods',
      'Performance optimization and validation',
      'Deployment and real-time monitoring'
    ],
    outcome: 'Achieved 94% accuracy in fake news detection with real-time processing capabilities.',
    metrics: ['94% Accuracy', '0.3s Processing Time', '500K+ Articles Analyzed']
  },
  {
    id: 'business-intelligence-dashboard',
    title: 'Business Intelligence Dashboard',
    description: 'Interactive Analytics Platform',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Power BI', 'SQL', 'Python', 'Azure'],
    category: 'Data Science',
    year: '2024',
    role: 'BI Developer',
    overview: 'Created a comprehensive business intelligence dashboard that provides real-time insights into key performance indicators, sales trends, and operational metrics.',
    process: [
      'Requirements gathering and stakeholder interviews',
      'Data modeling and ETL pipeline development',
      'Interactive visualization design',
      'Performance optimization',
      'User training and documentation'
    ],
    outcome: 'Enabled data-driven decision making across the organization with 40% faster reporting.',
    metrics: ['40% Faster Reporting', '15 Key Metrics', '500+ Daily Users']
  },
  {
    id: 'ci-cd-pipeline',
    title: 'CI/CD Pipeline Automation',
    description: 'DevOps Infrastructure Solution',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Docker', 'Jenkins', 'Kubernetes', 'AWS'],
    category: 'DevOps',
    year: '2023',
    role: 'DevOps Engineer',
    overview: 'Implemented a fully automated CI/CD pipeline that streamlines deployment processes and ensures consistent, reliable software delivery.',
    process: [
      'Infrastructure assessment and planning',
      'Containerization with Docker',
      'Pipeline configuration and testing',
      'Monitoring and alerting setup',
      'Team training and documentation'
    ],
    outcome: 'Reduced deployment time by 70% and eliminated manual deployment errors.',
    metrics: ['70% Faster Deployments', '99.9% Uptime', 'Zero Manual Errors']
  },
  {
    id: 'intelligent-chatbot',
    title: 'Intelligent Customer Service Bot',
    description: 'GenAI-Powered Support System',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['OpenAI', 'LangChain', 'Python', 'FastAPI'],
    category: 'AI/ML',
    year: '2024',
    role: 'AI Engineer',
    overview: 'Built an intelligent chatbot using generative AI that provides 24/7 customer support with human-like conversation capabilities.',
    process: [
      'Natural language understanding design',
      'Integration with knowledge base',
      'Conversation flow optimization',
      'Testing and quality assurance',
      'Deployment and monitoring'
    ],
    outcome: 'Improved customer satisfaction by 35% while reducing support costs by 50%.',
    metrics: ['35% Higher Satisfaction', '50% Cost Reduction', '24/7 Availability']
  }
];