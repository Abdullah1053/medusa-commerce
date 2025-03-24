import {
    createStep,
    StepResponse,
    createWorkflow,
    WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import { BRAND_MODULE } from "../../modules/brand"
import BrandService from "../../modules/brand/brand.service"
import { Brand } from "../../modules/brand/models/brand"
        
export type CreateBrandWorkflowInput = {
    name: string
    description: string
    logo: string
    website: string
    isActive: boolean
}

export const createBrandStep = createStep(
    "create-brand-step",
    async (input: CreateBrandWorkflowInput, { container }) => {
        const brandService = container.resolve(BRAND_MODULE)
        const brand = await brandService.createBrands({
            name: input.name,
            description: input.description,
            logo: input.logo,
            website: input.website,
            isActive: input.isActive
        } as Partial<typeof Brand>)
        return new StepResponse(brand, (brand as any)?.id)
    }
)

export const createBrandWorkflow = createWorkflow(
    "create-brand",
    (input: CreateBrandWorkflowInput) => {
        const brand = createBrandStep(input)  
      return new WorkflowResponse(brand)
    }
  )
