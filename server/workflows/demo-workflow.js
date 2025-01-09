const demoWorkflow = {
    steps: [
        {
            type: 'email',
            template: 'demo.initial',
            delay: 0
        },
        {
            type: 'email',
            template: 'demo.reminder',
            delay: 24,
            condition: 'not_started_demo'
        },
        {
            type: 'task',
            title: 'Follow up with demo request',
            delay: 48,
            assignTo: 'sales_rep'
        }
    ]
};