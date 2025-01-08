from enum import Enum

class WorkflowTemplates(Enum):
    SALES_PIPELINE = 'sales_pipeline'
    CUSTOMER_ONBOARDING = 'customer_onboarding'
    EXPENSE_TRACKING = 'expense_tracking'
    PROJECT_MANAGEMENT = 'project_management'

class WorkflowService:
    @staticmethod
    def get_workflow_template(template_type: WorkflowTemplates):
        """Retrieve predefined workflow templates"""
        templates = {
            WorkflowTemplates.SALES_PIPELINE: {...},
            WorkflowTemplates.CUSTOMER_ONBOARDING: {...},
            WorkflowTemplates.EXPENSE_TRACKING: {...},
            WorkflowTemplates.PROJECT_MANAGEMENT: {...}
        }
        return templates.get(template_type, {})
