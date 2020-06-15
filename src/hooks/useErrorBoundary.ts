import { useState } from "react";

export function useErrorBoundary() {
  const [/* state */, setState] = useState();
  const setErrorBoundary = (err: any) => {
    setState(() => {
      throw new Error(err);
    });
  }

  return setErrorBoundary;
}