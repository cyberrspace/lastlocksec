import api from "./api";

export async function adminLogin(payload: { email: string; password: string }) {
  const res = await api.post("/admin/login", payload);
  return res.data;
}

export async function getAllUsers() {
  const res = await api.get("/admin/users");
  return res.data;
}

export async function createEstate(payload: unknown) {
  const res = await api.post("/admin/estate", payload);
  return res.data;
}
