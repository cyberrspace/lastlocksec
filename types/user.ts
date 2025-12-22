export type UserRole = "admin" | "resident" | "businessOwner";

export interface User {
  _id: string;
  email: string;
  isVerified: boolean;
  status: "active" | "inactive";
  role: UserRole;
  firstName: string;
  lastName: string;
  phoneNumber: string;

  // Optional fields (based on role)
  address?: string;
  moveInDate?: string;
  businessName?: string;
  industryType?: string;

  createdAt: string;
  updatedAt: string;
}
