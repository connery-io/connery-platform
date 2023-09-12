export default () => ({
  RunnerConfig: {
    // GitHub Personal Access Token is used to access connectors in private repositories.
    // The user associated with the PAT must have access to the private repositories.
    // It's optional if you don't use private connectors.
    GitHubPat: process.env.GITHUB_PAT,

    // OpenAI API Key is used for the Natural Language Actions feature.
    // It's optional if you don't use the feature.
    OpenAiApiKey: process.env.OPENAI_API_KEY,
  },

  // We recommend creating a separate API key for each client.
  ApiKeys: [
    {
      // This is a default API key.
      // You can use it for testing purposes. But it is also used for the internal purposes of the runner.
      // For example, by the pre-installed connery-io/connery-runner-administration connector (see below).
      Title: 'Connery Runner API Key',
      ApiKey: process.env.CONNERY_RUNNER_API_KEY,
    },
  ],

  // List of connectors installed on the runner.
  InstalledConnectors: [
    {
      // This is a pre-installed connector for runner administration.
      Key: 'connery-io/connery-runner-administration@main',
      ConfigurationParameters: {
        RunenrUrl: 'http://localhost:4201',
        RunnerApiKey: process.env.CONNERY_RUNNER_API_KEY, // This API key is used by the connector to access the runner's API.
      },
    },
  ],
});
