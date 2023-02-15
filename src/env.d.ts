// import * from '@nortech/sparkplug-client';

/**
 *
 */
//TODO::Change it to read from config file
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: string = 'dev' | 'production';
      SOURCE_TYPE: 'wss' | 'ws' | 'mqtt' | 'mqtts' | 'tcp' | 'ssl' | 'wx' | 'wxs' | undefined;
      SOURCE_TYPE_ID: string;
      SOURCE_TYPE_VERSION: number;
      IDENTITY: string;
      PSK_KEY: string;
      KEEPALIVE: number;
      ASSETS_PATH_FOLDER: string;
      ASSET_FILE_NAME: string;
      TARGET_FOLDER: string;
      BRIDGE_PORT: number;
      BRIDGE_URL: string;
      API_EPO_PORT: number;
      API_EPO_URL: string;
      TEST_CLIENT: IClient;
      TEST_STATION: IStation;
      SAMPLE_GRANULARITY: number;
      BROKER_HOST: string;
      SSL_PORT: number;
    }
  }
}

export {};
