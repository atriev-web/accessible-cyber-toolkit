import { useEffect } from 'react';
import { SITE_NAME } from '../utils/assets';

export function usePageTitle(pageName: string) {
  useEffect(() => {
    document.title = `${pageName} | ${SITE_NAME}`;
  }, [pageName]);
}
