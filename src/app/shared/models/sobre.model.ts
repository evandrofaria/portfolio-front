export interface MenuItem {
  section: string;
  active: boolean;
}

export interface ProjectItem {
  img: string;
  name: string;
  badge: string;
  description: string;
  linkApple?: string;
  linkGoogle?: string;
  linkWeb?: string;
}

export interface JobItem {
  img: string;
  cargo: string;
  empresa: string;
  periodo: string;
  atribuicoes: string;
}

export interface EducationItem {
  img: string;
  local: string;
  area: string;
  descricao: string;
}

export interface SkillItem {
  img: string;
}
