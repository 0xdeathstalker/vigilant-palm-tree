import {
  BookOpen,
  Box,
  Building2,
  ChartColumn,
  Circle,
  CircleQuestionMark,
  Cloud,
  Code,
  CreditCard,
  Database,
  Globe,
  GraduationCap,
  House,
  Info,
  Layers,
  Leaf,
  Lightbulb,
  Lock,
  Mail,
  MessageCircle,
  Server,
  Settings,
  Shield,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type MenuData = MenuItem[];

export type MenuItem = {
  label: string;
  description?: string;
  icon: LucideIcon;
  items?: MenuItem[];
};

export const menuData: MenuData = [
  {
    label: "Home",
    description: "Welcome to our comprehensive platform",
    icon: House,
  },
  {
    label: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: Box,
    items: [
      {
        label: "Software Solutions",
        description: "Custom software development and deployment",
        icon: Code,
      },
      {
        label: "Cloud & Infrastructure",
        description: "Scalable cloud solutions and infrastructure",
        icon: Cloud,
        items: [
          {
            label: "Payment Gateway",
            description: "Secure online payments",
            icon: CreditCard,
          },
          {
            label: "Store Management",
            description: "Manage your products and orders",
            icon: Layers,
          },
          {
            label: "Global Shipping",
            description: "Ship worldwide",
            icon: Globe,
          },
        ],
      },
      {
        label: "Consulting services",
        description: "Expert guidance and strategic support",
        icon: Users,
        items: [
          {
            label: "Technical Consulting",
            description: "Architecture and implementation guidance",
            icon: Code,
            items: [
              {
                label: "System Architecture",
                description: "Scalable system design and planning",
                icon: Server,
              },
              {
                label: "Performance Optimization",
                description: "Application and system optimization",
                icon: Zap,
              },
              {
                label: "Security Audits",
                description: "Comprehensive security assessments",
                icon: Shield,
              },
            ],
          },
          {
            label: "Business Strategy",
            description: "Digital transformation and business planning",
            icon: TrendingUp,
          },
          {
            label: "Training & Workshops",
            description: "Team skill development and knowledge transfer",
            icon: GraduationCap,
            items: [
              {
                label: "Technical Training",
                description: "Programming and technology skills",
                icon: Code,
              },
              {
                label: "Agile Methodologies",
                description: "Scrum, kanban and agile practices",
                icon: Target,
              },
              {
                label: "Leadership & Management",
                description: "Technical leadership and team management",
                icon: Users,
              },
            ],
          },
        ],
      },
      {
        label: "Digital Transformation",
        description: "Comprehensive digital transformation services",
        icon: Lightbulb,
      },
      {
        label: "Cybersecurity Consulting",
        description: "Comprehensive cybersecurity services and solutions",
        icon: Shield,
      },
      {
        label: "Data Analytics & Consulting",
        description: "Data strategy, analytics and business intelligence",
        icon: ChartColumn,
        items: [
          {
            label: "Data Strategy",
            description: "Data governance and strategy development",
            icon: Target,
            items: [
              {
                label: "Data Governance",
                description: "Data quality, privacy and compliance frameworks",
                icon: Shield,
              },
              {
                label: "Data Architecture",
                description: "Enterprise data architecture design",
                icon: Server,
              },
              {
                label: "Data Lake Strategy",
                description: "Data lake design and implementation",
                icon: Database,
              },
            ],
          },
          {
            label: "Advanced Analytics",
            description: "Machine learning and predictive analysis",
            icon: Lightbulb,
          },
          {
            label: "Business Intelligence",
            description: "BI platform implementation and optimization",
            icon: ChartColumn,
          },
        ],
      },
      {
        label: "DevOps & Platform Engineering",
        description: "DevOps transformation and platform engineering",
        icon: Settings,
        items: [
          {
            label: "DevOps Transformation",
            description: "Organizational DevOps adoption and culture",
            icon: Zap,
          },
          {
            label: "Platform Engineering",
            description: "Internal developer platform development",
            icon: Server,
          },
          {
            label: "Cloud Migration",
            description: "Cloud adoption and migration strategies",
            icon: Cloud,
          },
        ],
      },
      {
        label: "Support & Maintenance",
        description: "Ongoing maintenance and support services",
        icon: Settings,
      },
    ],
  },
  {
    label: "Industry Solutions",
    description: "Specialised solutions for different industries",
    icon: Building2,
  },
  {
    label: "Company",
    description: "Learn more about our organisation and culture",
    icon: Users,
    items: [
      {
        label: "About Us",
        description: "Learn more about the company",
        icon: Info,
        items: [
          {
            label: "Our Story",
            description: "History and mission",
            icon: BookOpen,
          },
          {
            label: "Leadership",
            description: "Meet the team",
            icon: User,
          },
        ],
      },
      {
        label: "Privacy",
        description: "Manage privacy settings",
        icon: Lock,
      },
    ],
  },
  {
    label: "Resources",
    description: "Knowledge base, tools and learning materials",
    icon: BookOpen,
    items: [
      {
        label: "FAQ",
        description: "Frequently asked questions",
        icon: Circle,
      },
      {
        label: "Contact Support",
        description: "Get in touch with our team",
        icon: MessageCircle,
        items: [
          {
            label: "Email",
            description: "Send us an email",
            icon: Mail,
          },
          {
            label: "Chat",
            description: "Live chat support",
            icon: MessageCircle,
          },
        ],
      },
      {
        label: "About Us",
        description: "Learn more about the company",
        icon: Info,
        items: [
          {
            label: "Our Story",
            description: "History and mission",
            icon: BookOpen,
          },
          {
            label: "Leadership",
            description: "Meet the team",
            icon: User,
          },
        ],
      },
    ],
  },
  {
    label: "Support",
    description: "Get help and support when you need it",
    icon: CircleQuestionMark,
  },
  {
    label: "Research & Innovation",
    description: "Cutting-edge research and innovation initiatives",
    icon: Lightbulb,
  },
  {
    label: "Sustainability",
    description: "Environmental responsibility and sustainable technology",
    icon: Leaf,
  },
  {
    label: "Investor Relations",
    description: "Financial information and investor resources",
    icon: TrendingUp,
  },
];
