import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export type PropsPopover = {
  children: ReactNode;
  childProp?: string;
  title?: string;
  experience: string;
  id?: number;
}

export type Project = {
  id: number;
  title: string;
  url: string;
  githubUrl?: string;
  en: {
    description: string;
  };
  es: {
    description: string;
  };
  technologies: string[];
  description?: string; // Making description optional
};

export type Props3D = {
  position: any;
  radio?: number;
  changeColor?: number;
};

export type PropsLikeButton = {
  onClick?: () => void;
  state?: boolean;
  like?: boolean | null;
  disabled?: boolean | null;
};

export type PropsLogos = {
  color?: string;
}

export type Skill = {
  id: number;
  name: string;
  color: string;
  text: string;
  logo: React.FC<PropsLogos>; // JSX.Element is the type for React components
  experience: string;
  class: string;
}