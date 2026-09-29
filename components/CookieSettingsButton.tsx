"use client";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-analytics-consent"))}
      className="mt-4 block w-full text-center text-xs text-moon-200/50 transition-colors hover:text-brass-400"
    >
      {label}
    </button>
  );
}
