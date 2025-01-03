import { useState, useEffect } from 'react';
interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const useResearchProjects = () => {
  const [projects, setProjects] = useState<ResearchProject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulated API call
        const response = await fetch('/api/research-projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useResearchProjects;
