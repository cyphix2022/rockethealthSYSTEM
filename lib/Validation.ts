import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
 export const UserFormValidation = z.object({
    name: z.string()
        .min(2,"Username must be at least 2 characters.")
        .max(50,"Name must be at Most 55 characters."),
      email: z.string().email("Invalid email address"),
      phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone),'Invalid phone number')})