"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const search = useSearchParams().toString();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return null;
}
