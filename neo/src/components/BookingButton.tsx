"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { CAL_LINK, CAL_NAMESPACE, CAL_BRAND_COLOR } from "@/lib/booking";

/**
 * Bouton qui ouvre l'agenda Cal.com en surcouche.
 *
 * Même apparence que <Button> : variant, size et className passent tels quels.
 * Le visiteur ne quitte jamais besmara.fr.
 */
export function BookingButton({ children, ...props }: ButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": CAL_BRAND_COLOR },
          dark: { "cal-brand": CAL_BRAND_COLOR },
        },
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={`{"layout":"month_view"}`}
      {...props}
    >
      {children}
    </Button>
  );
}
