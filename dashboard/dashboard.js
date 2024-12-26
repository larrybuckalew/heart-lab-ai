// Dashboard JavaScript
class Dashboard {
    constructor() {
        this.currentView = 'email';
        this.charts = {};
        this.initializeEventListeners();
        this.loadInitialData();
    }

    initializeEventListeners() {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView(e.target.dataset.view);
            });
        });
    }

    async loadInitialData() {
        await Promise.all([
            this.loadEmailAnalytics(),
            this.loadABTestResults(),
            this.loadUserActivity()
        ]);
    }

    async loadEmailAnalytics() {
        try {
            const response = await fetch('/api/analytics/email');
            const data = await response.json();
            this.renderEmailAnalytics(data);
        } catch (error) {
            console.error('Error loading email analytics:', error);
        }
    }

    async loadABTestResults() {
        try {
            const response = await fetch('/api/analytics/ab-tests');
            const data = await response.json();
            this.renderABTestResults(data);
        } catch (error) {
            console.error('Error loading AB test results:', error);
        }
    }

    async loadUserActivity() {
        try {
            const response = await fetch('/api/analytics/user-activity');
            const data = await response.json();
            this.renderUserActivity(data);
        } catch (error) {
            console.error('Error loading user activity:', error);
        }
    }

    switchView(view) {
        document.querySelectorAll('.dashboard-view').forEach(el => {
            el.classList.remove('active');
        });
        document.getElementById(`${view}-analytics`).classList.add('active');
        this.currentView = view;
    }

    renderEmailAnalytics(data) {
        const ctx = document.getElementById('email-chart').getContext('2d');
        this.charts.email = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.dates,
                datasets: [
                    {
                        label: 'Opens',
                        data: data.opens,
                        borderColor: '#4c51bf'
                    },
                    {
                        label: 'Clicks',
                        data: data.clicks,
                        borderColor: '#48bb78'
                    }
                ]
            }
        });
    }

    renderABTestResults(data) {
        // Render A/B test results
    }

    renderUserActivity(data) {
        // Render user activity
    }
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});