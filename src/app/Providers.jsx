"use client";

import { ReactNode, Suspense } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }) {
  // wrap client side components in suspense, or else next deopts to client side rendering
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height="2px"
          color="#FDDA0D"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
}
