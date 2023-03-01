import sparkplug, {ISparkplugClientOptions}  from '@nortech/sparkplug-client';

const options: ISparkplugClientOptions ={  
    serverUrl: process.env.BROKER_HOST +':'+ process.env.SSL_PORT,
    clientId: process.env.TEST_CLIENT._id,
    username: '',
    password: '',
    groupId: '',
    edgeNode: '',
    keepalive: 3600 * process.env.KEEPALIVE,
    publishDeath: true,
    version: process.env.SOURCE_TYPE,
    mqttOptions:{
        port: process.env.SSL_PORT,
        host: process.env.BROKER_HOST,
        key: '',
        cert: '',
        ca: '',
        protocol: process.env.SOURCE_TYPE,
        protocolId: process.env.SOURCE_TYPE_ID,
        protocolVersion: process.env.SOURCE_TYPE_VERSION,
        rejectUnauthorized: true,
    }
} 

const client = sparkplug.newClient(options);

client.on('birth', () => {
   client.publishNodeBirth(getNodeBirth(), null);
});

client.on('connection', () => {
   console.log('Client is connecting!!');
});

client.on('error', (error) => {
   console.error('Client receive error:', error);
});

client.on('close', () => {
   console.log("Client receive 'close' event!!!");
  // client.stop();
});
