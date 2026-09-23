export interface Project {
  id: string;
  name: string;
  category: string;
  tags: string[];
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  included: string[];
  projects: Project[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}
