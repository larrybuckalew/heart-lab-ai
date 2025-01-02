import React from 'react';
import DataCard from '../components/DataCard';
import { useResearchProjects } from '../hooks/useResearchProjects';
import ErrorBoundary from '../components/ErrorBoundary';

const DashboardPage: React.FC = () => {
  const { projects, loading, error } = useResearchProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <ErrorBoundary>
      <div className="dashboard">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Research Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <DataCard
              key={index}
              title={project.name}
              value={project.status}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardPage;