import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { selectProject } from '../store/researchSlice';
import DataCard from '../components/DataCard';

const ResearchPage: React.FC = () => {
  const { projects, selectedProject } = useSelector((state: RootState) => state.research);
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Research Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            onClick={() => dispatch(selectProject(project))}
            className={`cursor-pointer ${selectedProject === project ? 'ring-2 ring-blue-500' : ''}`}
          >
            <DataCard 
              title={project}
              value={index + 1}
              description={selectedProject === project ? 'Selected Project' : 'Click to select'}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h2 className="text-xl font-semibold mb-2">Selected Project Details</h2>
          <p>{selectedProject} is currently under active research and development.</p>
        </div>
      )}
    </div>
  );
};

export default ResearchPage;