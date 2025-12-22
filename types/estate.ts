export interface Estate {
  _id: string;
  estateName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  status: "active" | "inactive";
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
