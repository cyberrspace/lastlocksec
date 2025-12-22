import api from "@/lib/axios";
import axiosInstance from "@/lib/axios";
import { Estate } from "@/types/estate";


export interface EstateRegisterPayload {
  estateName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface EstateRegisterResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    _id: string;
    estateName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    status: "inactive" | "active";
    isVerified: boolean;
    verificationToken: string;
    createdAt: string;
    updatedAt: string;
  };
}

/* ================= API CALL ================= */

export const registerEstate = (payload: EstateRegisterPayload) => {
  return api.post<EstateRegisterResponse>("/estates/register", payload);
};



/* ================= VERIFY ESTATE EMAIL ================= */

export interface VerifyEstateResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    _id: string;
    estateName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    status: "active" | "inactive";
    isVerified: boolean;
    verificationToken: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const verifyEstate = (verificationToken: string) => {
  return api.post<VerifyEstateResponse>("/estates/verify-email", {
    verificationToken,
  });
};

/* ================= RESEND VERIFICATION ================= */

export interface ResendVerificationResponse {
  success: boolean;
  status: number;
  message: string;
  data: string; // backend returns the new token
}

export const resendVerification = (email: string) => {
  return api.post<ResendVerificationResponse>(
    "/estates/resend-verification",
    { email }
  );
};



/* ================= LOGIN ================= */

export interface EstateLoginPayload {
  email: string;
  password: string;
}

export interface EstateLoginResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    token: string;
    estate: {
      _id: string;
      estateName: string;
      fullName: string;
      phoneNumber: string;
      email: string;
      status: "active" | "inactive";
      isVerified: boolean;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export const loginEstate = (payload: EstateLoginPayload) => {
  return api.post<EstateLoginResponse>("/estates/login", payload);
};




/* ================= FORGOT PASSWORD ================= */

export interface EstateForgotPasswordResponse {
  success: boolean;
  status: number;
  message: string;
  data: string; // reset token (e.g. "306231")
}

export const forgotPassword = (email: string) => {
  return api.post<EstateForgotPasswordResponse>(
    "/estates/forgot-password",
    { email }
  );
};

export const verifyResetToken = (resetToken: string) => {
  return api.post("/estates/request-code", {
    resetToken,
  });
};


/* ================= RESET PASSWORD ================= */

export interface EstateResetPasswordPayload {
  resetToken: string;
  newPassword: string;
}

export interface EstateResetPasswordResponse {
  success: boolean;
  status: number;
  message: string;
  data: Record<string, never>;

}

export const resetPassword = (payload: EstateResetPasswordPayload) => {
  return api.post<EstateResetPasswordResponse>(
    "/estates/reset-password",
    payload
  );
};


interface GetEstatesResponse {
  success: boolean;
  status: number;
  message: string;
  data: Estate[];
}

export async function getAllEstates(): Promise<Estate[]> {
  const res = await axiosInstance.get<GetEstatesResponse>("/estates/");
  return res.data.data; // ✅ RETURN ONLY THE ARRAY
}











