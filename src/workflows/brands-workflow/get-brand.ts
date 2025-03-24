import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { BRAND_MODULE } from "../../modules/brand";
import BrandService from "../../modules/brand/brand.service"

export type GetBrandStepInput = {
  id: string;
};

export const getBrandStep = createStep(
  "get-brand-step",
  async (input: GetBrandStepInput, { container }) => {
    const brandService: BrandService = container.resolve(BRAND_MODULE);

    const brand = await brandService.retrieveBrand(input.id);

    return new StepResponse(brand);
  }
); 

export const getBrandWorkflow = createWorkflow(
    "get-brand-workflow",
    (input: GetBrandStepInput) => {
        const brand = getBrandStep(input)
        return new WorkflowResponse(brand)
    }
)

