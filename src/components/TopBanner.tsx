import { useCallback } from 'react'
import { X } from 'lucide-react'
import { useAppState } from '../store'

export function TopBanner() {
  const { isBannerVisible, setBannerVisible } = useAppState();

  const handleCloseBanner = useCallback(() => {
    setBannerVisible(false);
  }, [setBannerVisible]);

  if (!isBannerVisible) {
    return null;
  }

  return (
    
  );
}
