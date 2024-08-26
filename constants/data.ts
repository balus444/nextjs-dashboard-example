import { NavItem } from '@/types';

{
  /* export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];
*/
}

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
  aum: string;
  sixMonthPerformance: string;
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';
};

export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active',
    aum: 'HK$1,200,000',
    sixMonthPerformance: '+5%',
    riskProfile: 'Moderate'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active',
    aum: 'HK$850,000',
    sixMonthPerformance: '+3%',
    riskProfile: 'Conservative'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active',
    aum: 'HK$2,300,000',
    sixMonthPerformance: '+7%',
    riskProfile: 'Aggressive'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive',
    aum: 'HK$500,000',
    sixMonthPerformance: '+2%',
    riskProfile: 'Moderate'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active',
    aum: 'HK$1,750,000',
    sixMonthPerformance: '+6%',
    riskProfile: 'Aggressive'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active',
    aum: 'HK$600,000',
    sixMonthPerformance: '+4%',
    riskProfile: 'Conservative'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active',
    aum: 'HK$1,100,000',
    sixMonthPerformance: '+5%',
    riskProfile: 'Moderate'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active',
    aum: 'HK$950,000',
    sixMonthPerformance: '+3.5%',
    riskProfile: 'Aggressive'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active',
    aum: 'HK$2,500,000',
    sixMonthPerformance: '+8%',
    riskProfile: 'Moderate'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active',
    aum: 'HK$700,000',
    sixMonthPerformance: '+2.5%',
    riskProfile: 'Conservative'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Clients',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Transactions',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Onboard',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Tasks',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  } /*,
  {
    title: 'Login',
    href: '/',
    icon: 'login',
    label: 'login'
  } */
];
