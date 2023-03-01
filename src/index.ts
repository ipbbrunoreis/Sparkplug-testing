import sparkplug, {ISparkplugClientOptions}  from '@nortech/sparkplug-client';

  const options: ISparkplugClientOptions = {
    serverUrl: `${process.env.API_EPO_URL}:${process.env.SSL_PORT}`,
    clientId: testClient._id,
    username: 'test',
    password: 'test',
    groupId: '',
    edgeNode: '',
    keepalive: Number(process.env.KEEPALIVE) * 3600,
    publishDeath: true,
    version: process.env.CLIENT_VERSION,
    mqttOptions: {
      port: Number(process.env.SSL_PORT),
      host: process.env.BROKER_HOST,
      key: fs.readFileSync(__dirname + '/ssl/client-key.pem'),
      cert: fs.readFileSync(__dirname + '/ssl/client-cert.pem'),
      ca: fs.readFileSync(__dirname + '/ssl/ca.pem'),
      protocol: 'mqtts',
      protocolId: process.env.SOURCE_TYPE_ID,
      protocolVersion: Number(process.env.SOURCE_TYPE_VERSION),
      rejectUnauthorized: false,
    },
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
