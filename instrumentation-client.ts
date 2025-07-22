import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://537afb471551a77f46d5caa0720109d9@o4509696443285504.ingest.us.sentry.io/4509696444268544",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
     Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;