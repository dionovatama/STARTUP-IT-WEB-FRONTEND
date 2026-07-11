/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveView = 'solutions' | 'developers' | 'katalog';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface ServicePlan {
  tier: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  bestValue?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Infrastructure' | 'SaaS' | 'Data';
  description: string;
  techStack: string[];
  image: string;
  caseStudyUrl: string;
}

export interface EngagementModel {
  name: string;
  description: string;
  features: string[];
  buttonText: string;
  mostPopular?: boolean;
}

export interface IndoService {
  tier: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  whatsappLink: string;
  bestValue?: boolean;
}
