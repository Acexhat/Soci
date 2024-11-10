import * as dotenv from 'dotenv';

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor() {
    const result = dotenv.config();
    if (result.error) {
      this.envConfig = process.env;
    } else {
      this.envConfig = result.parsed;
    }
  }

  public get(key: string) {
    return this.envConfig[key];
  }

  public getPort() {
    return this.get('PORT');
  }

  public async getMongoConfig() {
    return {
      uri: 'mongodb+srv://bhaskar20inn:nkvUq82C6zhyPTtg@soci-cluster1.aqax9.mongodb.net/?retryWrites=true&w=majority&appName=soci-cluster1',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
