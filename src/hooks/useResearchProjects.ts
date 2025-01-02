import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

export const useResearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await apiService.fetchResearchProjects();
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};