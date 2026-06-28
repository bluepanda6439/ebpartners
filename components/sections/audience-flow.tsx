"use client";

import { FaqSection } from "@/components/sections/faq";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import type { AudienceKey } from "@/lib/site-data";
import { useEffect, useState } from "react";

export function AudienceFlow() {
  const [audience, setAudience] = useState<AudienceKey>("individual");

  useEffect(() => {
    const handleAudienceChange = (event: Event) => {
      const nextAudience = (event as CustomEvent<AudienceKey>).detail;

      if (nextAudience === "individual" || nextAudience === "business") {
        setAudience(nextAudience);
      }
    };

    window.addEventListener("eb:setAudience", handleAudienceChange);

    return () =>
      window.removeEventListener("eb:setAudience", handleAudienceChange);
  }, []);

  return (
    <>
      <ProcessSection audience={audience} onAudienceChange={setAudience} />
      <FaqSection audience={audience} />
      <ServicesSection audience={audience} />
    </>
  );
}
