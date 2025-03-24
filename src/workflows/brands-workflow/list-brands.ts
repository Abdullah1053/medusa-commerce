import { createStep, createWorkflow, StepResponse, WorkflowResponse  } from "@medusajs/framework/workflows-sdk";
import { BRAND_MODULE } from "../../modules/brand";
import BrandService from "../../modules/brand/brand.service"

export const listBrandsStep = createStep(
  "list-brands-step",
  async (input: {}, { container }) => {
    const brandService: BrandService = container.resolve(BRAND_MODULE);

    const brands = await brandService.listBrands();

    return new StepResponse(brands);
  }
); 

export const listBrandsWorkflow = createWorkflow(
    "list-brands-workflow",
    (input: {}) => {
        const brands = listBrandsStep()
        return new WorkflowResponse(brands)
    }
)

