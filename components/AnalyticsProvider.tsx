"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view on route change, but exclude dashboard routes
    if (pathname && !pathname.startsWith('/dashboard')) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}
