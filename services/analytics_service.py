import logging
import metrics

class AnalyticsService:
    def __init__(self):
        self.logger = logging.getLogger('AutomationPerformance')
    
    def track_task_performance(self, task_name, execution_time, success_rate):
        """Track performance metrics for automation tasks"""
        metrics.record('task_performance', {
            'task_name': task_name,
            'execution_time': execution_time,
            'success_rate': success_rate
        })
    
    def generate_performance_report(self, period='daily'):
        """Generate comprehensive performance reports"""
        return metrics.generate_report(period)
