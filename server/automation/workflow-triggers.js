class WorkflowTriggers {
    constructor() {
        this.workflows = new Map();
    }

    registerWorkflow(trigger, action) {
        this.workflows.set(trigger, action);
    }

    async handleEvent(event) {
        const action = this.workflows.get(event.type);
        if (action) {
            await action(event);
        }
    }
}