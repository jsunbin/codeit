import { useCallback, useState } from "react";

function useAsync (asyncFunction ) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFuncton = useCallback( async (...args) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  }, [asyncFunction])

  return [pending, error, wrappedFuncton];

}

export default useAsync;