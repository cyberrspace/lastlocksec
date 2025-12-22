import axiosInstance from "@/lib/axios";
import { User } from "@/types/user";

interface GetUsersResponse {
  success: boolean;
  status: number;
  message: string;
  data: User[];
}

export async function getAllUsers(): Promise<User[]> {
  const res = await axiosInstance.get<GetUsersResponse>("/users/");
  return res.data.data;
}
