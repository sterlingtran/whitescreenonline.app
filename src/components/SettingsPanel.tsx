import { Control } from '@/src/data/tools';

interface SettingsPanelProps {
  controls: Control[];
  settings: Record<string, unknown>;
  onSettingChange: (key: string, value: unknown) => void;
  title?: string;
}

export function SettingsPanel({
  controls,
  settings,
  onSettingChange,
  title = 'Settings',
}: SettingsPanelProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 max-h-[80vh] overflow-y-auto">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">{title}</h3>

      <div className="space-y-4">
        {controls.map((control) => {
          const value = settings[control.id] ?? control.defaultValue;

          return (
            <div key={control.id}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {control.label}
                {control.description && (
                  <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {control.description}
                  </span>
                )}
              </label>

              {control.type === 'slider' && (
                <input
                  type="range"
                  min={control.min ?? 0}
                  max={control.max ?? 100}
                  step={control.step ?? 1}
                  value={Number(value) || 0}
                  onChange={(e) => onSettingChange(control.id, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              )}

              {control.type === 'number-input' && (
                <input
                  type="number"
                  min={control.min}
                  max={control.max}
                  step={control.step ?? 1}
                  value={Number(value) || 0}
                  onChange={(e) => onSettingChange(control.id, Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}

              {control.type === 'color-picker' && (
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={String(value) || '#000000'}
                    onChange={(e) => onSettingChange(control.id, e.target.value)}
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={String(value) || '#000000'}
                    onChange={(e) => onSettingChange(control.id, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  />
                </div>
              )}

              {control.type === 'select' && (
                <select
                  value={String(value) || ''}
                  onChange={(e) => onSettingChange(control.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {control.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}

              {control.type === 'toggle' && (
                <button
                  onClick={() => onSettingChange(control.id, !value)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition ${
                    value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {value ? 'Enabled' : 'Disabled'}
                </button>
              )}

              {control.type === 'button' && (
                <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">
                  {control.label}
                </button>
              )}

              {control.type === 'text-input' && (
                <input
                  type="text"
                  value={String(value) || ''}
                  onChange={(e) => onSettingChange(control.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
