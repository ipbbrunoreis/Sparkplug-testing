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

console.log(client);

// const client =  mqtt.connect(options);

// client.connect();

// client.on('connect', () =>{
//  console.log('MQTT client connected!!!');
// });

// client.on('error', (error: any) => {
//     console.log(`MQTT client error: ${error}`);
// });

// client.on('disconnect', () => {
//     console.log('MQTT client disconnected.');
// });
