/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServicePlan, PortfolioProject, EngagementModel, IndoService } from './types';

// Hotlinked high-resolution asset images directly from the requested HTML mockups
export const IMAGES = {
  hero3D: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1Zozz-ARqVF8gFBcs_K2XloN3ckGKhc7gI6oKgEUJ8znNYZwNQ1d39-UyOvKNqXIOU_zOSvrCWobGYy2NPrgDEVsRwaP59OxIixoxCXu6jTdm95UonLZjO3mtrUzIgq3_kZ8mdRUIyxZfj2NJI4nQZ9teHRGGagGlKDms7SgzQYkOo784hMQhoBg_pdVDG_YM-7kgzLdJMC0x5sfSDr0pFKu4SFzbaUhLW-N5nFwb32DLSUoyNA',
  neoEdgeMesh: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcWP2N_X6ulcc4-SuLtR9i_3eEaS7WmzYcC2ScqxaEvQpilyi4raEuUy6nibkKAoeW9RYrPubZxCXH-1T1UlknpzIYczQT14PXjLb1_y-zsaBa34tqleQRitS6DoYXxxD-QUWjxz-1vFZlD7IPPRpgt930RpdjZVs53YtJ2LRpXHcsSQUOfLSTV3cvTsPu2aIPKrYQWesYoaur4dgFkcKL33jKeHeLRCRq4EX8BGPhDoroSVkvBMk',
  vaultZero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_j7DZquNzzuX35zkd6KWsnCEZ701lCvD3eSpSZWcSYvLyChRRHxHt84rMlmo8b2yxIoOSkz75LNgu43kWW6kFSisaiRSRtH-UWrQDCmYxjNCnxj63hkcrwCwY7fkpbHXQ10U24Q2j8jd85CzXleCvJ187WhjSOjRFTEzRA6cBeO4nl_qVbGkzjYS4Nq_qlhZdC2FG-AmbZyIzMcVHwb48OjgvgKrAF88F4mz5MXSfkt0mvtTqt1c',
  streamSync: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Ysg0vYAR1cXS6TLqqmJAPrF05ENNReLsR728u5DxaTIbodLLNx9k3k95lngHxhVJkp4sWGpm0QaLfdnCYRgXUJQQYE_wmo6gNZYxRoKIC2U2p0vVvJ2xFEYKzPT-DoAMau_yG8bE3dqb_dpGjaRyEPwzyFIglc-F240zAHX2Qy5QTt2dk_kyETOEU-3e1a2o7iVP3SnL27-nEjBX_V2U40Y1RDsp3jiihw5DHPv7Z6T8UO40DvQ',
  neoNode: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8NZesJu8O9f9j1-RV7XAisMj1GWHvx3aoTT75HGC-bOvfm8TSMLi4ZaQDXiAu1LotJCuuqtQdhbY5ZdwWcH_-anop7zUpOey--lvltojmlJ7kgwR-qoJ2AOv4arRDkOrLgx-1zJrmDEBNO4DexiZsieodIWleUHqULwMVMTYSv0PenZwzYQv4JvSvjGhkqrUFJIRA39WsyV_tMdGDnjOVW2VXkMu6Cmb5ba0PDDv71nsis1THsvk',
  monolithCore: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3qhD3pnDibsdiX1FECllwPGRy_stMvfcOPe2LnYYkzuvzP0-L17-gT4xr_yeKKUUlgkX60IdbNUtQ1zST5k2kdIY6Lq7VwMVMAvpiKpyHZrJHV6SwIzrCxVkTOcP2jrvsg0iCvKRYRyR-zMRaNp3bhnzgbBJQDaSu9eYY-kHWeLKsMVB_ysZvCHVbkbf1BInuzbJDNkeVcTWhiGbMRDDN1DTwPu-9kPx8WVuFMGkx0ZYYr_HbvI',
  orbitSync: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH7cjV6Bq9ioCULa5nNlJjBoSUDPPs5TN97LztGvT32nGYKqlNr5X1_ni6M7WTJ_ND0o8l4h-_V3v-KnFLEXU3ZUjsTqhLKlWj6YR8_hI4dAwrkMrY0aa6w95GCEfXU7N5g2ydPNNKDnFKkZKIv3Pqb1UVUSTZ-67Js6lXRbNruaScDY-fBmq3XUri_V5_tM8oVWPQARc_qbiEfm0fJo6SHVlDn6OLDzL7vgV3rpCqNMGQK5HwYTw',
  scalableArch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACW4C7RUZ2k4A9OZ0V9OjoQWDldLtaJa2uQG1iZN9JLZy3maIEH07GiNGdNyi0jgC4vpY2d4yAmJTKhC4H58zT8RxPFdihp38eFV0_g-zcX0fjUh_JLuai9tqOv6s-qtqC-VCh8A7z4KWf24hL3wz4VUZzUzaHYH_ZFipY2GyqnF6NQMlznTLxj3PiX2D_EOm1IknCHZz9CeY0tK5T6xIVzJi6v3rjAV_mw5Hlv-SaIaYGGZVdWpc',
  optimizedPerf: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM_bqFQorRpl1vnJoAgi2XMCyCNUyoWv-vODYU1ZUno3VFS7LipeDqVXrCYPjkuZYe8G5JWlMm3xrsb5ha7_kpDfC52ITqA5bFcpcCv8wblPKxxN6yLxGo4Ic-4_VhcM0Bll3rRNo0LIQcM7lhCk8c-lk4SQ9EMf_Jvk62ZXWrLhBdZzVYBy-ODhj6X-9P_aMc4E60snBrGZ0M6psLr9hrM_wYcsPppSJg40u7DxGsgoyZWNBInWw'
};

export const GLOBAL_PLANS: ServicePlan[] = [
  {
    tier: 'Tier 01: Core',
    name: 'Core Stack',
    description: 'Foundational stack for startups and individual developers.',
    price: '$49',
    period: '/mo',
    features: [
      { text: '10 Microservices', included: true },
      { text: 'Shared Infrastructure', included: true },
      { text: 'Basic Monitoring', included: true }
    ],
    buttonText: 'Choose Plan'
  },
  {
    tier: 'Tier 02: Scale',
    name: 'Enterprise Scale',
    description: 'Optimized performance for growing mid-sized enterprises.',
    price: '$199',
    period: '/mo',
    features: [
      { text: 'Unlimited Microservices', included: true },
      { text: 'Dedicated Clusters', included: true },
      { text: '24/7 Expert Support', included: true }
    ],
    buttonText: 'Upgrade Now',
    bestValue: true
  },
  {
    tier: 'Tier 03: Global',
    name: 'Global Reach',
    description: 'High-availability multi-region complex systems.',
    price: 'Custom',
    period: '',
    features: [
      { text: 'Global Mesh Network', included: true },
      { text: 'Custom Security Policies', included: true },
      { text: 'White-label Deployment', included: true }
    ],
    buttonText: 'Contact Sales'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'neo-edge',
    title: 'Project: Neo-Edge Mesh',
    category: 'Infrastructure',
    description: 'Reducing global latency by 45% through localized edge container orchestration.',
    techStack: ['Rust', 'AWS EKS'],
    image: IMAGES.neoEdgeMesh,
    caseStudyUrl: '#'
  },
  {
    id: 'vault-zero',
    title: 'Vault-Zero Compliance',
    category: 'SaaS',
    description: 'Automated SOC2 compliance auditing for sensitive healthcare data clusters.',
    techStack: ['Node.js', 'K8s', 'GCP'],
    image: IMAGES.vaultZero,
    caseStudyUrl: '#'
  },
  {
    id: 'stream-sync',
    title: 'Stream-Sync Pro',
    category: 'Data',
    description: 'Real-time data ingestion at petabyte scale for global finance institutions.',
    techStack: ['Kafka', 'Apache Flink'],
    image: IMAGES.streamSync,
    caseStudyUrl: '#'
  },
  {
    id: 'neonode-ecosystem',
    title: 'NeoNode Ecosystem',
    category: 'Infrastructure',
    description: 'Scaling global node communication for low-latency fintech applications. Achieved 99.999% uptime during peak loads.',
    techStack: ['Rust', 'AWS EKS', 'gRPC'],
    image: IMAGES.neoNode,
    caseStudyUrl: '#'
  },
  {
    id: 'monolith-core',
    title: 'Monolith Core',
    category: 'SaaS',
    description: 'Redefining database management for enterprise resource planning at scale.',
    techStack: ['PostgreSQL', 'Go', 'Docker'],
    image: IMAGES.monolithCore,
    caseStudyUrl: '#'
  },
  {
    id: 'orbit-sync',
    title: 'Orbit Sync',
    category: 'Infrastructure',
    description: 'Next-gen satellite telemetry processing with sub-millisecond data synchronization.',
    techStack: ['Kubernetes', 'Go', 'gRPC'],
    image: IMAGES.orbitSync,
    caseStudyUrl: '#'
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    name: 'Strategy Only',
    description: 'Architecture audit, cloud-cost optimization, and technical roadmap development.',
    features: [
      'Comprehensive Tech Audit',
      'Scalability Assessment',
      'Cloud spend optimization'
    ],
    buttonText: 'Book Consultation'
  },
  {
    name: 'Full-Stack Build',
    description: 'End-to-end design and implementation of modern SaaS platforms.',
    features: [
      'Custom Architecture Design',
      'Frontend & Backend Dev',
      'Automated CI/CD Pipelines',
      'Performance Tuning'
    ],
    buttonText: 'Select Full-Stack',
    mostPopular: true
  },
  {
    name: 'Systems Architect',
    description: 'Dedicated high-level engineering for core infrastructure and distributed systems.',
    features: [
      'Embedded Architect Service',
      'Distributed Data Systems',
      '24/7 SRE Support'
    ],
    buttonText: 'Enquire Enterprise'
  }
];

export const INDO_SERVICES: IndoService[] = [
  {
    tier: 'Small Scale',
    name: 'Essential',
    price: 'Rp 4.5M',
    period: '/start',
    features: [
      { text: 'Setup Cloud Infrastructure', included: true },
      { text: 'Monitoring Dashboard', included: true },
      { text: 'SSL & Security Basics', included: true },
      { text: 'Auto-scaling Support', included: false }
    ],
    buttonText: 'Pesan via WhatsApp',
    whatsappLink: 'https://wa.me/628123456789?text=Halo%20ARCHITECT.IT,%20saya%20tertarik%20dengan%20paket%20Essential.'
  },
  {
    tier: 'Business Growth',
    name: 'Professional',
    price: 'Rp 12.5M',
    period: '/start',
    features: [
      { text: 'Kubernetes Orchestration', included: true },
      { text: 'CI/CD Pipeline Integration', included: true },
      { text: 'Auto-scaling & Load Balancing', included: true },
      { text: '24/7 Priority Support', included: true }
    ],
    buttonText: 'Pesan via WhatsApp',
    whatsappLink: 'https://wa.me/628123456789?text=Halo%20ARCHITECT.IT,%20saya%20tertarik%20dengan%20paket%20Professional.',
    bestValue: true
  },
  {
    tier: 'Enterprise Elite',
    name: 'Full Suite',
    price: 'Custom',
    period: '/quotes',
    features: [
      { text: 'Multi-region Availability', included: true },
      { text: 'Custom Data Engineering', included: true },
      { text: 'Compliance (ISO/SOC2) Readiness', included: true },
      { text: 'Dedicated System Architect', included: true }
    ],
    buttonText: 'Hubungi Konsultan',
    whatsappLink: 'https://wa.me/628123456789?text=Halo%20ARCHITECT.IT,%20saya%20ingin%20berkonsultasi%20tentang%20paket%20Full%20Suite.'
  }
];
