// generated by cdk8s
import { Helm, HelmProps } from 'cdk8s';
import { Construct } from 'constructs';

export interface RedisProps {
  readonly namespace?: string;
  readonly releaseName?: string;
  readonly helmExecutable?: string;
  readonly helmFlags?: string[];
  readonly values?: RedisValues;
}

export class Redis extends Construct {
  public constructor(scope: Construct, id: string, props: RedisProps = {}) {
    super(scope, id);
    let updatedProps = {};

    if (props.values) {
      const { additionalValues, ...valuesWithoutAdditionalValues } = props.values;
      updatedProps = {
        ...props,
        values: {
          ...this.flattenAdditionalValues(valuesWithoutAdditionalValues),
          ...additionalValues,
        },
      };
    }

    const finalProps: HelmProps = {
      chart: 'redis',
      repo: 'https://charts.bitnami.com/bitnami',
      version: '18.2.0',
      ...(Object.keys(updatedProps).length !== 0 ? updatedProps : props),
    };

    new Helm(this, 'Helm', finalProps);
  }

  private flattenAdditionalValues(props: { [key: string]: any }): { [key: string]: any } {
    for (let prop in props) {
      if (Array.isArray(props[prop])) {
        props[prop].map((item: any) => {
          if (typeof item === 'object' && prop !== 'additionalValues') {
            return this.flattenAdditionalValues(item);
          }
          return item;
        });
      }
      else if (typeof props[prop] === 'object' && prop !== 'additionalValues') {
        props[prop] = this.flattenAdditionalValues(props[prop]);
      }
    }

    const { additionalValues, ...valuesWithoutAdditionalValues } = props;

    return {
      ...valuesWithoutAdditionalValues,
      ...additionalValues,
    };
  }
}

/**
 * @schema redis
 */
export interface RedisValues {
  /**
   * Allowed values: `standalone` or `replication`
   *
   * @schema redis#architecture
   */
  readonly architecture?: RedisArchitecture;

  /**
   * @schema redis#auth
   */
  readonly auth?: RedisAuth;

  /**
   * @schema redis#master
   */
  readonly master?: RedisMaster;

  /**
   * @schema redis#replica
   */
  readonly replica?: RedisReplica;

  /**
   * @schema redis#volumePermissions
   */
  readonly volumePermissions?: RedisVolumePermissions;

  /**
   * @schema redis#metrics
   */
  readonly metrics?: RedisMetrics;

  /**
   * @schema redis#common
   */
  readonly common?: { [key: string]: any };

  /**
   * @schema redis#global
   */
  readonly global?: { [key: string]: any };

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema redis#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * Allowed values: `standalone` or `replication`
 *
 * @schema RedisArchitecture
 */
export enum RedisArchitecture {
  /** standalone */
  STANDALONE = "standalone",
  /** replication */
  REPLICATION = "replication",
}

/**
 * @schema RedisAuth
 */
export interface RedisAuth {
  /**
   * @schema RedisAuth#enabled
   */
  readonly enabled?: boolean;

  /**
   * Defaults to a random 10-character alphanumeric string if not set
   *
   * @default a random 10-character alphanumeric string if not set
   * @schema RedisAuth#password
   */
  readonly password?: string;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisAuth#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisMaster
 */
export interface RedisMaster {
  /**
   * Allowed values: `Deployment` or `StatefulSet`
   *
   * @schema RedisMaster#kind
   */
  readonly kind?: RedisMasterKind;

  /**
   * @schema RedisMaster#persistence
   */
  readonly persistence?: RedisMasterPersistence;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisMaster#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisReplica
 */
export interface RedisReplica {
  /**
   * @schema RedisReplica#replicaCount
   */
  readonly replicaCount?: number;

  /**
   * @schema RedisReplica#persistence
   */
  readonly persistence?: RedisReplicaPersistence;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisReplica#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisVolumePermissions
 */
export interface RedisVolumePermissions {
  /**
   * Use an init container to set required folder permissions on the data volume before mounting it in the final destination
   *
   * @schema RedisVolumePermissions#enabled
   */
  readonly enabled?: boolean;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisVolumePermissions#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisMetrics
 */
export interface RedisMetrics {
  /**
   * Create a side-car container to expose Prometheus metrics
   *
   * @schema RedisMetrics#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedisMetrics#serviceMonitor
   */
  readonly serviceMonitor?: RedisMetricsServiceMonitor;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisMetrics#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * Allowed values: `Deployment` or `StatefulSet`
 *
 * @schema RedisMasterKind
 */
export enum RedisMasterKind {
  /** Deployment */
  DEPLOYMENT = "Deployment",
  /** StatefulSet */
  STATEFUL_SET = "StatefulSet",
}

/**
 * @schema RedisMasterPersistence
 */
export interface RedisMasterPersistence {
  /**
   * Enable persistence using Persistent Volume Claims
   *
   * @schema RedisMasterPersistence#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedisMasterPersistence#size
   */
  readonly size?: string;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisMasterPersistence#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisReplicaPersistence
 */
export interface RedisReplicaPersistence {
  /**
   * Enable persistence using Persistent Volume Claims
   *
   * @schema RedisReplicaPersistence#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema RedisReplicaPersistence#size
   */
  readonly size?: string;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisReplicaPersistence#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}

/**
 * @schema RedisMetricsServiceMonitor
 */
export interface RedisMetricsServiceMonitor {
  /**
   * Create a ServiceMonitor to track metrics using Prometheus Operator
   *
   * @schema RedisMetricsServiceMonitor#enabled
   */
  readonly enabled?: boolean;

  /**
   * Values that are not available in values.schema.json will not be code generated. You can add such values to this property.
   *
   * @schema RedisMetricsServiceMonitor#additionalValues
   */
  readonly additionalValues?: { [key: string]: any };

}
