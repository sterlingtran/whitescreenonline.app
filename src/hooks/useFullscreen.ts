import { useRef, useEffect, useCallback, useState } from 'react';

interface FullscreenDocument extends Document {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void>;
  mozFullScreenElement?: Element | null;
  mozCancelFullScreen?: () => Promise<void>;
}

interface FullscreenElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
}

export function useFullscreen() {
  const ref = useRef<FullscreenElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enter = useCallback(async () => {
    if (!ref.current) return;

    try {
      if (ref.current.requestFullscreen) {
        await ref.current.requestFullscreen();
      } else if (ref.current.webkitRequestFullscreen) {
        await ref.current.webkitRequestFullscreen();
      } else if (ref.current.mozRequestFullScreen) {
        await ref.current.mozRequestFullScreen();
      }
      setIsFullscreen(true);
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  }, []);

  const exit = useCallback(async () => {
    try {
      const fullscreenDocument = document as FullscreenDocument;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (fullscreenDocument.webkitFullscreenElement) {
        await fullscreenDocument.webkitExitFullscreen?.();
      } else if (fullscreenDocument.mozFullScreenElement) {
        await fullscreenDocument.mozCancelFullScreen?.();
      }
      setIsFullscreen(false);
    } catch (error) {
      console.error('Failed to exit fullscreen:', error);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // ESC key to exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exit();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, exit]);

  return { ref, enter, exit, isFullscreen };
}
