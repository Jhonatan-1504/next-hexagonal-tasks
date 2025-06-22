"use client";

import { useEffect, useState, useCallback, useRef } from "react";

type FetchCallback<T> = (signal: AbortSignal) => Promise<T>;

type UseFetchAPIOptions = {
  autoDispatch?: boolean;
};

export function useFetchAPI<T>(
  callback: FetchCallback<T>,
  deps: any[] = [],
  options: UseFetchAPIOptions = { autoDispatch: true }
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    await callback(controller.signal)
      .then((res) => setData(res))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
  }, deps);

  useEffect(() => {
    if (options.autoDispatch) {
      fetchData();
    }
    return () => controllerRef.current?.abort();
  }, [fetchData, options.autoDispatch]);

  return {
    data,
    loading,
    error,
    refresh: fetchData,
  };
}
