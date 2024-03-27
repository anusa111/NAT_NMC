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
