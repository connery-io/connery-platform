import { ConfigurationParametersObject } from '@connery-io/sdk';
import { ConfigurationParameterRuntime } from '../types';

export function populateConfigurationParameters(
  configurationParameters: ConfigurationParameterRuntime[],
  cpObject: ConfigurationParametersObject,
): ConfigurationParameterRuntime[] {
  return configurationParameters.map((cp) => {
    if (cpObject[cp.Key]) {
      cp.Value = cpObject[cp.Key];
    }
    return cp;
  });
}
