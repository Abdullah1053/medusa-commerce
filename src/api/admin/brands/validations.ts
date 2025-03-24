import { z } from "zod"

export const PostAdminCreateBrand = z.object({
  name: z.string(),
  description: z.string(),
  logo: z.string(),
  website: z.string(),
  isActive: z.boolean(),
})

export const createBrandSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  logo: z.string().optional(),
  website: z.string().optional(),
  isActive: z.boolean().optional(),
})

export const updateBrandSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  website: z.string().optional(),
  isActive: z.boolean().optional(),
})

