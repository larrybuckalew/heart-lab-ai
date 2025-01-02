import create from 'zustand';
import { persist } from 'zustand/middleware';
import { WorkflowConfig } from '../types/workflow';

interface WorkflowState {
  workflows: Record<string, WorkflowConfig>;
  activeWorkflow: string | null;
  addWorkflow: (workflow: WorkflowConfig) => void;
  updateWorkflow: (id: string, workflow: Partial<WorkflowConfig>) => void;
  deleteWorkflow: (id: string) => void;
  setActiveWorkflow: (id: string | null) => void;
  duplicateWorkflow: (id: string) => void;
}

export const useWorkflowStore = create<WorkflowState>(
  persist(
    (set) => ({
      workflows: {},
      activeWorkflow: null,

      addWorkflow: (workflow) =>
        set((state) => ({
          workflows: {
            ...state.workflows,
            [workflow.id]: workflow
          }
        })),

      updateWorkflow: (id, updates) =>
        set((state) => ({
          workflows: {
            ...state.workflows,
            [id]: {
              ...state.workflows[id],
              ...updates
            }
          }
        })),

      deleteWorkflow: (id) =>
        set((state) => {
          const { [id]: deleted, ...workflows } = state.workflows;
          return { workflows };
        }),

      setActiveWorkflow: (id) =>
        set({
          activeWorkflow: id
        }),

      duplicateWorkflow: (id) =>
        set((state) => {
          const workflow = state.workflows[id];
          if (!workflow) return state;

          const newId = `${workflow.id}-copy-${Date.now()}`;
          return {
            workflows: {
              ...state.workflows,
              [newId]: {
                ...workflow,
                id: newId,
                name: `${workflow.name} (Copy)`,
              }
            }
          };
        })
    }),
    {
      name: 'workflow-storage',
      version: 1,
    }
  )
);