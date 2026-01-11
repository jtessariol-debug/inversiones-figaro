export interface Project {
  id: string;
  title: string;
  description: string;
  price?: string;
  details: string[];
  amenities: string[];
  image: string;
  location?: string;
  ctaText: string;
}

export interface Amenity {
  id: string;
  title: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  experience: string;
  phone: string;
  facebook: string;
  logo: string;
  logoInfo: string;
}
