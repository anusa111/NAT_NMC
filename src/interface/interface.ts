export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IMetatags {
  heading: string;
  subheading: string;
  og_image?: any;
  description?: string;
}

export interface Department {
  id: number;
  name: string;
  slug: string;
  department_category_id: string;
  image: string;
  description: string | null;
  show_in_home: string;
  status: string;
  created_at: string;
  updated_at: string;
  image_link: string;
}

export interface DepartmentCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string | null;
  show_in_home: string;
  status: string;
  created_at: string;
  updated_at: string;
  image_link: string;
  departments: Department[];
}
