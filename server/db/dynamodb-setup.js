const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();

const tables = {
    emailEvents: {
        TableName: 'email_events',
        KeySchema: [
            { AttributeName: 'emailId', KeyType: 'HASH' },
            { AttributeName: 'timestamp', KeyType: 'RANGE' }
        ],
        AttributeDefinitions: [
            { AttributeName: 'emailId', AttributeType: 'S' },
            { AttributeName: 'timestamp', AttributeType: 'S' }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    },
    abTestResults: {
        TableName: 'ab_test_results',
        KeySchema: [
            { AttributeName: 'testId', KeyType: 'HASH' },
            { AttributeName: 'variantId', KeyType: 'RANGE' }
        ],
        AttributeDefinitions: [
            { AttributeName: 'testId', AttributeType: 'S' },
            { AttributeName: 'variantId', AttributeType: 'S' }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    },
    userAnalytics: {
        TableName: 'user_analytics',
        KeySchema: [
            { AttributeName: 'userId', KeyType: 'HASH' },
            { AttributeName: 'eventTime', KeyType: 'RANGE' }
        ],
        AttributeDefinitions: [
            { AttributeName: 'userId', AttributeType: 'S' },
            { AttributeName: 'eventTime', AttributeType: 'S' }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    }
};

async function createTables() {
    for (const [name, schema] of Object.entries(tables)) {
        try {
            await dynamoDB.createTable(schema).promise();
            console.log(`Created table: ${name}`);
        } catch (error) {
            if (error.code === 'ResourceInUseException') {
                console.log(`Table ${name} already exists`);
            } else {
                console.error(`Error creating table ${name}:`, error);
            }
        }
    }
}

module.exports = { createTables, tables };