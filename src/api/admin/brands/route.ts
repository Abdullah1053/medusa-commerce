import {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import {
    createBrandWorkflow,
    getBrandWorkflow,
    updateBrandWorkflow,
    deleteBrandWorkflow,
    listBrandsWorkflow
} from "../../../workflows/brands-workflow"

import {
    createBrandSchema,
    updateBrandSchema
} from "./validations"

// Create a new brand
type CreateBrandWorkflowInput = {
    name: string;
    description: string;
    logo: string;
    website: string;
    isActive: boolean;
}
export const POST = async (
    req: MedusaRequest<CreateBrandWorkflowInput>,
    res: MedusaResponse
) => {
    const { result } = await createBrandWorkflow(req.scope)
        .run({
            input: req.validatedBody,
        })

    res.json({ brand: result })
}

// List all brands
export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const { result } = await listBrandsWorkflow(req.scope)
        .run({
            input: {},
        })

    res.json({ brands: result })
}

// Get a specific brand
export const GET_BY_ID = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const { result } = await getBrandWorkflow(req.scope)
        .run({
            input: { id: req.params.id },
        })

    res.json({ brand: result })
}

// Update a brand
export const UPDATE = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const validated = updateBrandSchema.parse(req.body)

    const { result } = await updateBrandWorkflow(req.scope)
        .run({
            input: { id: req.params.id, ...validated },
        })

    res.json({ brand: result })
}

// Delete a brand
export const DELETE = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    await deleteBrandWorkflow(req.scope)
        .run({
            input: { id: req.params.id },
        })

    res.status(204).send()
}