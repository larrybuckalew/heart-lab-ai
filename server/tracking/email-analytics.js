const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

class EmailAnalytics {
    async trackOpen(emailId, metadata) {
        const params = {
            TableName: 'email_events',
            Item: {
                eventId: `open_${Date.now()}`,
                emailId,
                type: 'open',
                timestamp: new Date().toISOString(),
                metadata
            }
        };
        await dynamoDB.put(params).promise();
    }

    async trackClick(emailId, linkId, metadata) {
        const params = {
            TableName: 'email_events',
            Item: {
                eventId: `click_${Date.now()}`,
                emailId,
                linkId,
                type: 'click',
                timestamp: new Date().toISOString(),
                metadata
            }
        };
        await dynamoDB.put(params).promise();
    }

    async getEmailStats(emailId) {
        const params = {
            TableName: 'email_events',
            KeyConditionExpression: 'emailId = :emailId',
            ExpressionAttributeValues: {
                ':emailId': emailId
            }
        };
        const result = await dynamoDB.query(params).promise();
        return this.processStats(result.Items);
    }

    processStats(events) {
        return {
            opens: events.filter(e => e.type === 'open').length,
            clicks: events.filter(e => e.type === 'click').length,
            lastOpened: events.filter(e => e.type === 'open').pop()?.timestamp,
            clickMap: this.generateClickMap(events)
        };
    }

    generateClickMap(events) {
        return events
            .filter(e => e.type === 'click')
            .reduce((acc, event) => {
                acc[event.linkId] = (acc[event.linkId] || 0) + 1;
                return acc;
            }, {});
    }
}

module.exports = new EmailAnalytics();