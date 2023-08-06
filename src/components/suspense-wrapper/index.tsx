import React, { Suspense } from "react";
import Loading from "@/components/loading";

const SuspenseWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading size="large" />}>{children}</Suspense>
    </React.Fragment>
  );
};

export default SuspenseWrapper;
