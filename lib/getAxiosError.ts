
import { AxiosError } from "axios";

export const getAxiosErrorMessage = (err: unknown, fallback: string) => {
  if (err instanceof AxiosError) {
    return err.response?.data?.message ?? fallback;
  } else if (err instanceof Error) {
    return err.message;
  }
  return fallback;
};
