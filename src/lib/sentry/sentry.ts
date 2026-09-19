
import * as Sentry from '@sentry/nextjs';

export const logError = (
  error: unknown,
  context?: Record<string, unknown>,
) => {
  Sentry.withScope((scope) => {
    if (context) {
      scope.setExtras(context);
    }

    Sentry.captureException(error);
  });
};