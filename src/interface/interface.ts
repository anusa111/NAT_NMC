export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IMetatags {
  heading: string;
  subheading: string;
  og_image?: any;
  description?: string;
}

export interface Slider {
  id: number;
  title: string;
  image: string;
  status: string;
  image_link: string;
}

export interface Activity {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  image_link: string;
}

export interface ActivityDetail {
  detail: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    image_link: string;
  };
  related: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    image_link: string;
  }[];
}

export interface IFacilityProps {
  name: string;
  icon: any;
}

export interface IButtonProps {
  data: IButtonContent;
}
interface IButtonContent {
  name: string;
}

export interface IClinicalServiceProps {
  slug: string;
  name: string;
  description: string;
  image_link: string;
  image: string;
}

export interface IComponentHeaderProps {
  data: IComponentHeaderContent;
}
export interface IComponentHeaderContent {
  small_title?: string;
  main_title: string;
  description?: string;
}
export interface IHealthCareProps {
  name: string;
  image_link: string;
  price: number;
  details: IHealthCareDetail[];
  image: string;
}
interface IHealthCareDetail {
  service: string;
  package_id: string;
}

export interface IMessageFromDirector {
  name: string;
  image_link: string;
  message: string;
  position: string;
}

export interface INews {
  title: string;
  slug: string;
  created_at: string;
  image_link: string;
  views: string;
}

export interface IRelatedDepartment {
  name: string;
  slug: string;
}

export interface IRelatedService {
  name: string;
  slug: string;
}

export interface ProgramDetail {
  id: number;
  name: string;
  slug: string;
  academic_category_id: string;
  description: string;
  type: string;
  career: string;
  course_outline: string;
  admission: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  status: string;
  image_link: string;
  doctors: IDoctor[];
}

export interface IDoctor {
  id: number;
  name: string;
  slug: string;
  designation: string | null;
  nmc_no: string | null;
  phone: string;
  email: string;
  address: string;
  degree: string;
  info: string;
  status: string;
  image_link: string;
}

export interface Research {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  meta_title: string | null;
  meta_keywords: string | null;
  meta_description: string | null;
  status: string;
  image_link: string;
}

export interface ResearchDetail {
  detail: {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    status: string;
    created_at: string;
    updated_at: string;
    image_link: string;
  };
  related: RelatedResearch[];
}

export interface RelatedResearch {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  status: string;
  image_link: string;
}

export interface IDepartment {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_link: string;
}

export interface ITeamMember {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  designation: string;
  image: string;
  team_category_id: string;
  status: string;
  image_link: string;
}

export interface ITeamCategory {
  id: number;
  name: string;
  status: string;
  teams: ITeamMember[];
}
