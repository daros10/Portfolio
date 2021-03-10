export interface Welcome {
  about: string;
  education: Education[];
  experience: Experience[];
  professionalProjects: Projects[];
  personalProjects: Projects[];
  skills: string[];
}

export interface Education {
  name: string;
  grade: string;
  speciality: string;
}

export interface Experience {
  nameFactory: string;
  role: string;
  dateStar: string;
  dateEnd: string;
  tasks: string[];
}

export interface Projects {
  name: string;
  description: string;
  github: string;
  languagesTools: any[];
}
