export interface Experience {
  id?: number;
  name: string;
  description: string;
  year: string;
  employmentType:
    | "contract"
    | "full-time"
    | "part-time"
    | "freelance"
    | "internship";
  remote: boolean;
  location: string;
  current: boolean;
  link: string;
  task: string;
  logo?: string;
}
