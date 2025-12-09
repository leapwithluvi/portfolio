export interface JobDetail {
  id: number;
  description: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  details: JobDetail[];
  summary: string;
}
