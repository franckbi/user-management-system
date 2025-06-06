import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  active: z.boolean(),
});

// Type for a brand-new user (no id yet)
export type NewUser = z.infer<typeof userSchema>;
