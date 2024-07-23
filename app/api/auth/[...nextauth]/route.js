import { handlers } from "auth";
export const { GET, POST } = handlers

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
];