import {
  Code2,
  BookOpen,
  Brain,
  Palette,
  Scale,
  Stethoscope,
  Users,
  Globe,
  Zap,
  Award,
  Building2,
  Activity,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const programs = [
  {
    id: 1,
    title: "Engineering",
    description:
      "Build the future with cutting-edge technology and innovation. Master software, hardware, and emerging technologies.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Business",
    description:
      "Develop leadership skills and business acumen. Learn strategy, finance, and entrepreneurship from industry experts.",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Computer Science",
    description:
      "Dive deep into algorithms, AI, and data science. Prepare for roles at tech giants and startups.",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Create beautiful and functional user experiences. Learn UX/UI, graphics, and product design.",
    icon: Palette,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Law",
    description:
      "Study constitutional law, corporate law, and international relations with renowned legal scholars.",
    icon: Scale,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    title: "Medical Science",
    description:
      "Pursue medicine, nursing, and biomedical sciences. Train with state-of-the-art medical facilities.",
    icon: Stethoscope,
    color: "from-red-500 to-pink-500",
  },
];

export const features = [
  {
    id: 1,
    title: "Industry-Aligned Curriculum",
    description: "Our courses are designed with input from leading companies to ensure relevance and job readiness.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Expert Faculty",
    description: "Learn from professors with extensive industry experience and published research.",
    icon: Users,
  },
  {
    id: 3,
    title: "Global Opportunities",
    description: "Access exchange programs, internships, and partnerships with universities worldwide.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Internship Support",
    description: "Gain practical experience with our extensive industry partnership network and mentorship.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Scholarship Options",
    description: "Merit-based and need-based scholarships available for deserving students.",
    icon: Award,
  },
  {
    id: 6,
    title: "Modern Facilities",
    description: "State-of-the-art labs, libraries, sports facilities, and student co-working spaces.",
    icon: Activity,
  },
];

export const stats = [
  { label: "50+", description: "Programs Offered", icon: "🎓" },
  { label: "20K+", description: "Active Students", icon: "👥" },
  { label: "500+", description: "Expert Faculty", icon: "👨‍🏫" },
  { label: "95%", description: "Placement Rate", icon: "📈" },
  { label: "100+", description: "Global Partners", icon: "🌍" },
  { label: "25 Yrs", description: "Excellence", icon: "⭐" },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    course: "Computer Science",
    batch: "Class of 2023",
    rating: 5,
    text: "EduVerse University transformed my career. The curriculum was modern, the faculty was supportive, and I landed my dream job at a top tech company. Highly recommended!",
    avatar: "🧑‍💼",
  },
  {
    name: "Arjun Patel",
    course: "Business Administration",
    batch: "Class of 2023",
    rating: 5,
    text: "The internship opportunities and industry connections I gained here were invaluable. The campus culture is vibrant and the education is world-class.",
    avatar: "👨‍💻",
  },
  {
    name: "Sarah Johnson",
    course: "Engineering",
    batch: "Class of 2022",
    rating: 5,
    text: "I chose EduVerse for its excellent faculty and modern infrastructure. The placement team was amazing, and I got placed before graduation!",
    avatar: "👩‍🔬",
  },
  {
    name: "Ravi Desai",
    course: "Design",
    batch: "Class of 2023",
    rating: 5,
    text: "The design program here equipped me with industry-standard skills. The collaborative environment fostered creativity and innovation.",
    avatar: "🎨",
  },
];

export const campusHighlights = [
  {
    title: "State-of-the-Art Labs",
    description: "Advanced research facilities equipped with latest technology",
  },
  {
    title: "Sports Complex",
    description: "Olympic-standard facilities for various sports and recreation",
  },
  {
    title: "Innovation Hub",
    description: "Startup incubation center supporting student entrepreneurs",
  },
  {
    title: "Cultural Events",
    description: "Year-round festivals, competitions, and cultural celebrations",
  },
];
