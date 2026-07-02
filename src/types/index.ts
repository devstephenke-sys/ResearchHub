export type UserRole = 'student' | 'expert' | 'quality_reviewer' | 'finance' | 'admin' | 'super_admin';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
