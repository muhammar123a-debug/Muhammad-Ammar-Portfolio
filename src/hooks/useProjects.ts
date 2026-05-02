import { useState, useEffect } from 'react';
import { Project } from '../types';
import INITIAL_PROJECTS from '../data/projects.json';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Versioned key to force a refresh from the new JSON source and clear "old data" mistakes
    const STORAGE_KEY = 'ml_portfolio_projects_v2';
    const saved = localStorage.getItem(STORAGE_KEY);
    
    // Cleanup old version if it exists
    if (localStorage.getItem('ml_portfolio_projects')) {
      localStorage.removeItem('ml_portfolio_projects');
    }

    let currentProjects: Project[] = [];

    if (saved) {
      try {
        currentProjects = JSON.parse(saved);
      } catch (e) {
        currentProjects = [];
      }
    }

    // Merge logic: JSON is the absolute source of truth for its IDs
    const mergedProjects = mergeProjects(INITIAL_PROJECTS as Project[], currentProjects);

    setProjects(mergedProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedProjects));
  }, []);

  // Helper function to sync JSON with localStorage
  function mergeProjects(jsonProjects: Project[], localProjects: Project[]): Project[] {
    const jsonIds = new Set(jsonProjects.map(p => p.id));
    
    // We always include ALL JSON projects
    const result: Project[] = [...jsonProjects];

    // We only include local projects that were NOT part of the old hardcoded set
    // (Local projects created via Admin panel since the ID generator changed)
    localProjects.forEach(lp => {
      // If it's not a JSON project AND it wasn't one of the old IDs (1, 2, 3) 
      // that might have been locally modified
      if (!jsonIds.has(lp.id)) {
        result.push(lp);
      }
    });

    return result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }

  const addProject = (project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: Date.now(),
    };

    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('ml_portfolio_projects_v2', JSON.stringify(updated));
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('ml_portfolio_projects_v2', JSON.stringify(updated));
  };

  return { projects, addProject, deleteProject };
}