import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { BRAND_MODULE } from "../../modules/brand";
import BrandService from "../../modules/brand/brand.service"

export type DeleteBrandStepInput = {
  id: string;
};

export const deleteBrandStep = createStep(
  "delete-brand-step",
  async (input: DeleteBrandStepInput, { container }) => {
    const brandService: BrandService = container.resolve(BRAND_MODULE);

    await brandService.deleteBrands(input.id);

    return new StepResponse(null);
  }
); 

export const deleteBrandWorkflow = createWorkflow(
    "delete-brand-workflow",
    (input: DeleteBrandStepInput) => {
        const brand = deleteBrandStep(input)
        return new WorkflowResponse(brand)
    }
)
