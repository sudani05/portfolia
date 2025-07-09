export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'AI/ML' | 'Web Dev' | 'Data Science' | 'DevOps';
  year: string;
  role: string;
  overview: string;
  process: string[];
  outcome: string;
  metrics?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Data Science' | 'DevOps' | 'AI/ML';
}