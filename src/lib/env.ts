import zod from "zod";

const envSchema = zod.object({
    DATABASE_URL: zod.string().min(5, { message: "Missing zod variable" }),
    GOOGLE_CLIENT_ID: zod.string().min(5, { message: "Missing zod variable" }),
    GOOGLE_CLIENT_SECRET: zod
        .string()
        .min(5, { message: "Missing zod variable" }),
    NEXTAUTH_URL: zod.string().min(5, { message: "Missing zod variable" }),
    NEXTAUTH_SECRET: zod.string().min(5, { message: "Missing zod variable" }),
});

export const env = envSchema.parse(process.env);
