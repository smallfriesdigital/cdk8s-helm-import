import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { Redis, RedisArchitecture } from './imports/redis';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    new Redis(this, 'Redis', {
      values: {
        architecture: RedisArchitecture.REPLICATION,     // <------- type safe property
      }
    });
  }
}

const app = new App();
new MyChart(app, 'cdk8simporthelm');
app.synth();
