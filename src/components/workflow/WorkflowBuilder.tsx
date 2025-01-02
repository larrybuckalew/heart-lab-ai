import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

interface WorkflowStep {
  id: string;
  type: 'data_input' | 'ai_process' | 'decision' | 'automation' | 'notification';
  config: Record<string, any>;
  name: string;
}

interface WorkflowConfig {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  trigger: {
    type: 'manual' | 'scheduled' | 'event';
    config: Record<string, any>;
  };
}

export const WorkflowBuilder: React.FC = () => {
  const [workflow, setWorkflow] = useState<WorkflowConfig>({
    id: '',
    name: '',
    description: '',
    steps: [],
    trigger: {
      type: 'manual',
      config: {}
    }
  });

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const steps = Array.from(workflow.steps);
    const [reorderedStep] = steps.splice(result.source.index, 1);
    steps.splice(result.destination.index, 0, reorderedStep);

    setWorkflow({ ...workflow, steps });
  };

  const addStep = (type: WorkflowStep['type']) => {
    const newStep: WorkflowStep = {
      id: `step-${Date.now()}`,
      type,
      name: `New ${type.replace('_', ' ')} Step`,
      config: {}
    };

    setWorkflow({
      ...workflow,
      steps: [...workflow.steps, newStep]
    });
  };

  const updateStepConfig = (stepId: string, config: Record<string, any>) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.map(step =>
        step.id === stepId ? { ...step, config } : step
      )
    });
  };

  const renderStepConfig = (step: WorkflowStep) => {
    switch (step.type) {
      case 'data_input':
        return (
          <div className="space-y-4">
            <Input
              placeholder="Data Source"
              value={step.config.source || ''}
              onChange={e => updateStepConfig(step.id, { 
                ...step.config,
                source: e.target.value 
              })}
            />
            <Select
              value={step.config.format || 'json'}
              onValueChange={value => updateStepConfig(step.id, {
                ...step.config,
                format: value
              })}
            >
              <option value="json">JSON</option>
              <option value="csv">CSV</option>
              <option value="xml">XML</option>
            </Select>
          </div>
        );

      case 'ai_process':
        return (
          <div className="space-y-4">
            <Select
              value={step.config.model || 'gpt-4'}
              onValueChange={value => updateStepConfig(step.id, {
                ...step.config,
                model: value
              })}
            >
              <option value="gpt-4">GPT-4</option>
              <option value="claude">Claude</option>
              <option value="palm">PaLM</option>
            </Select>
            <Input
              placeholder="Prompt Template"
              value={step.config.prompt || ''}
              onChange={e => updateStepConfig(step.id, {
                ...step.config,
                prompt: e.target.value
              })}
            />
          </div>
        );

      case 'decision':
        return (
          <div className="space-y-4">
            <Input
              placeholder="Condition"
              value={step.config.condition || ''}
              onChange={e => updateStepConfig(step.id, {
                ...step.config,
                condition: e.target.value
              })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="True Path"
                value={step.config.truePath || ''}
                onChange={e => updateStepConfig(step.id, {
                  ...step.config,
                  truePath: e.target.value
                })}
              />
              <Input
                placeholder="False Path"
                value={step.config.falsePath || ''}
                onChange={e => updateStepConfig(step.id, {
                  ...step.config,
                  falsePath: e.target.value
                })}
              />
            </div>
          </div>
        );

      case 'automation':
        return (
          <div className="space-y-4">
            <Select
              value={step.config.action || ''}
              onValueChange={value => updateStepConfig(step.id, {
                ...step.config,
                action: value
              })}
            >
              <option value="email">Send Email</option>
              <option value="update_crm">Update CRM</option>
              <option value="create_task">Create Task</option>
              <option value="schedule_meeting">Schedule Meeting</option>
            </Select>
            <Input
              placeholder="Action Parameters"
              value={step.config.params || ''}
              onChange={e => updateStepConfig(step.id, {
                ...step.config,
                params: e.target.value
              })}
            />
          </div>
        );

      case 'notification':
        return (
          <div className="space-y-4">
            <Select
              value={step.config.channel || ''}
              onValueChange={value => updateStepConfig(step.id, {
                ...step.config,
                channel: value
              })}
            >
              <option value="email">Email</option>
              <option value="slack">Slack</option>
              <option value="sms">SMS</option>
            </Select>
            <Input
              placeholder="Message Template"
              value={step.config.template || ''}
              onChange={e => updateStepConfig(step.id, {
                ...step.config,
                template: e.target.value
              })}
            />
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Workflow Builder</h1>
        <Button onClick={() => console.log(workflow)}>Save Workflow</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workflow Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Workflow Name"
              value={workflow.name}
              onChange={e => setWorkflow({ ...workflow, name: e.target.value })}
            />
            <Input
              placeholder="Description"
              value={workflow.description}
              onChange={e => setWorkflow({ ...workflow, description: e.target.value })}
            />
            <Select
              value={workflow.trigger.type}
              onValueChange={value => setWorkflow({
                ...workflow,
                trigger: { ...workflow.trigger, type: value as any }
              })}
            >
              <option value="manual">Manual Trigger</option>
              <option value="scheduled">Scheduled</option>
              <option value="event">Event Based</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Available Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button 
                  onClick={() => addStep('data_input')}
                  className="w-full"
                >
                  Add Data Input
                </Button>
                <Button 
                  onClick={() => addStep('ai_process')}
                  className="w-full"
                >
                  Add AI Process
                </Button>
                <Button 
                  onClick={() => addStep('decision')}
                  className="w-full"
                >
                  Add Decision
                </Button>
                <Button 
                  onClick={() => addStep('automation')}
                  className="w-full"
                >
                  Add Automation
                </Button>
                <Button 
                  onClick={() => addStep('notification')}
                  className="w-full"
                >
                  Add Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-3">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="workflow-steps">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {workflow.steps.map((step, index) => (
                    <Draggable
                      key={step.id}
                      draggableId={step.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card>
                            <CardHeader>
                              <CardTitle>{step.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              {renderStepConfig(step)}
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;