import { useState, useCallback } from "react";

export function useErrorBoundary() {
  const [/* state */, setState] = useState();
  const setErrorBoundary = useCallback((err: any) => {
    setState(() => {
      throw new Error(err);
    });
  }, []);

  return setErrorBoundary;
}