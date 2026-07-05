"use client";

import { FaqSection } from "@/components/sections/faq";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import type { AudienceKey } from "@/lib/site-data";
import { startTransition, useEffect, useState } from "react";

export function AudienceFlow() {
  const [audience, setAudience] = useState<AudienceKey>("individual");

  const updateAudience = (nextAudience: AudienceKey) => {
    startTransition(() => {
      setAudience(nextAudience);
    });
  };

  useEffect(() => {
    const handleAudienceChange = (event: Event) => {
      const nextAudience = (event as CustomEvent<AudienceKey>).detail;

      if (nextAudience === "individual" || nextAudience === "business") {
        startTransition(() => {
          setAudience(nextAudience);
        });
      }
    };

    window.addEventListener("eb:setAudience", handleAudienceChange);

    return () =>
      window.removeEventListener("eb:setAudience", handleAudienceChange);
  }, []);

  return (
    <>
      <ProcessSection audience={audience} onAudienceChange={updateAudience} />
      <FaqSection audience={audience} />
      <ServicesSection audience={audience} />
    </>
  );
}
