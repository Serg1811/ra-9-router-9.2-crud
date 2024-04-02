export type FetchStatusProps = {
  isLoading: boolean;
  data: {content: string; created: Date; id: number}[];
  error: {message: string} | null;
}