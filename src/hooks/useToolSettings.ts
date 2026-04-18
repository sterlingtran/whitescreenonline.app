import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface ToolSettings {
  [key: string]: unknown;
}

export function useToolSettings<T extends ToolSettings>(
  toolId: string,
  defaultSettings: T = {} as T,
) {
  const [settings, setSettings] = useLocalStorage<T>(
    `screenhub_settings_${toolId}`,
    defaultSettings,
  );

  const updateSetting = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setSettings({
        ...settings,
        [key]: value,
      });
    },
    [settings, setSettings],
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings, defaultSettings]);

  return { settings, updateSetting, resetSettings };
}
