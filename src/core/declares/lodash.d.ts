import lodash from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    warn: any;
    error: any;
  }
}
