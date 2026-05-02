/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  createdAt: number;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, icon: 'python' },
  { name: 'NumPy', level: 85, icon: 'grid' },
  { name: 'Pandas', level: 85, icon: 'table' },
  { name: 'Matplotlib', level: 80, icon: 'bar-chart' },
  { name: 'Seaborn', level: 80, icon: 'bar-chart' },
  { name: 'SQL', level: 75, icon: 'database' },
];
