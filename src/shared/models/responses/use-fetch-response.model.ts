export interface UseFetchResponse<T> {
  data: T | null;
  error: Error | null;
  isFetching: boolean;
}