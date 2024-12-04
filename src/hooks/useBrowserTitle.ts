import { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';

export default function useBrowserTitle(title = '', dependencies = []) {
  useEffect(() => {
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, ...dependencies]);
}
