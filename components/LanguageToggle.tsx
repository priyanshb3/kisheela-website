"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-cream/80 p-1 text-xs font-medium text-ink shadow-sm">
      <Globe size={14} className="ml-2 text-terracotta shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "en"
            ? "bg-terracotta text-cream font-semibold"
            : "text-ink/70 hover:text-ink"
        }`}
      >
        EN
      </button>
      <span className="text-ink/20">|</span>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "hi"
            ? "bg-terracotta text-cream font-semibold"
            : "text-ink/70 hover:text-ink"
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}
