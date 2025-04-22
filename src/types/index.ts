export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'design' | 'development' | 'marketing';
}