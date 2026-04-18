interface AdSenseProps {
  format?: 'auto' | 'vertical' | 'horizontal' | 'rectangle';
  adSlot?: string;
}

export function AdSense({ format = 'auto', adSlot = 'placeholder' }: AdSenseProps) {
  return (
    <div
      className="my-4 min-h-[100px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400"
      data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive="true"
    >
      <p className="text-sm">Advertisement</p>
    </div>
  );
}
