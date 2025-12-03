import api from "@/lib/axios";


interface EstateRegisterPayload {
  email: string;
  password: string;
  estateName: string;
  fullName: string;
  phoneNumber: string;
}

export const registerEstate = async (payload: EstateRegisterPayload) => {
  const res = await api.post("/estates/register", payload);
  return res.data;
};

// VERIFY ESTATE EMAIL

export const verifyEstate = async (token: string) => {
  const res = await api.post("/estates/verify-email", { verificationToken: token });
  return res.data;
};



// 🔥 RESEND VERIFICATION CODE (NEW)
export const resendVerification = async (email: string) => {
  const res = await api.post("/estates/resend-verification", { email });
  return res.data;
};

// LOGIN ESTATE

interface EstateLoginPayload {
  email: string;
  password: string;
}

export const loginEstate = async (payload: EstateLoginPayload) => {
  const res = await api.post("/estates/login", payload);
  return res.data;
};

export const forgotPassword = async (email: string) => {
  const res = await api.post("/estates/forgot-password", { email });
  return res.data;
};

export const verifyResetToken = async (email: string, token: string) => {
  const res = await api.post("/estates/verify-reset-token", { email, token });
  return res.data;
};

export const resetPassword = async ({
  email,
  token,
  password,
}: {
  email: string;
  token: string;
  password: string;
}) => {
  const res = await api.post("/estates/reset-password", {
    email,
    resetToken: token,
    newPassword: password,
  });

  return res.data;
};
