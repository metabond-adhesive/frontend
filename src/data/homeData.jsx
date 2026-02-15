import React from 'react';
import { Settings, Users, Globe, Briefcase, Factory, Car, Building2, Cpu, TestTube2, Leaf, HeadphonesIcon } from 'lucide-react';

export const statsData = [
  { id: 1, label: 'Years of Experience', value: '25+', icon: <Settings size={32} /> },
  { id: 2, label: 'Projects Completed', value: '500+', icon: <Briefcase size={32} /> },
  { id: 3, label: 'Global Partners', value: '40+', icon: <Globe size={32} /> },
  { id: 4, label: 'Tons Produced', value: '10k+', icon: <Factory size={32} /> }
];

export const industriesData = [
  {
    id: 1,
    title: 'Industrial & Heavy Machinery',
    desc: 'High-strength bonding for extreme conditions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    link: '/products?category=industrial',
    icon: <Factory />
  },
  {
    id: 2,
    title: 'Automotive & Transportation',
    desc: 'OEM-approved adhesives for vehicle assembly.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
    link: '/products?category=automotive',
    icon: <Car />
  },
  {
    id: 3,
    title: 'Construction & Infrastructure',
    desc: 'Weather-resistant sealants for lasting structures.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    link: '/products?category=construction',
    icon: <Building2 />
  },
  {
    id: 4,
    title: 'Electronics & High Tech',
    desc: 'Precision bonding for sensitive components.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    link: '/products?category=electronics',
    icon: <Cpu />
  }
];

export const featuresData = [
  {
    id: 1,
    title: 'Advanced R&D',
    desc: 'Cutting-edge formulations developed in our state-of-the-art labs to meet evolving industry standards.',
    icon: <TestTube2 size={40} />
  },
  {
    id: 2,
    title: 'Eco-Friendly',
    desc: 'Low VOC products committed to sustainable building practices and environmental responsibility.',
    icon: <Leaf size={40} />
  },
  {
    id: 3,
    title: '24/7 Support',
    desc: 'Dedicated technical experts available round-the-clock to guide your application process.',
    icon: <HeadphonesIcon size={40} />
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'Metro Rail Network',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1557064973-04e4e9bc39ca?w=800'
  },
  {
    id: 2,
    title: 'Skyline Tower',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
  },
  {
    id: 3,
    title: 'EV Battery Fleet',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800'
  }
];
