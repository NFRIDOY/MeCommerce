export const USER_Role = {
    admin: "admin",
    user: "user",
} as const;

export interface TUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: keyof typeof USER_Role;
    address: string;
    isDeleted: boolean;
}


