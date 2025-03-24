import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { BRAND_MODULE } from "../../modules/brand";
import BrandService from "../../modules/brand/brand.service"
import { Brand } from "../../modules/brand/models/brand"
export type UpdateBrandStepInput = {
  id: string;
  name?: string;
  description?: string;
  logo?: string;
  website?: string;
  isActive?: boolean;
};

export const updateBrandStep = createStep(
  "update-brand-step",
  async (input: UpdateBrandStepInput, { container }) => {
    const brandService = container.resolve(BRAND_MODULE);
    const updatedBrand = await brandService.updateBrands(
      { id: input.id },
      {
        name: input.name,
        description: input.description,
        logo: input.logo,
        website: input.website,
        isActive: input.isActive
      }
    );
    return new StepResponse(updatedBrand);
  }
); 

export const updateBrandWorkflow = createWorkflow(
    "update-brand-workflow",
    (input: UpdateBrandStepInput) => {
        const updatedBrand = updateBrandStep(input)
        return new WorkflowResponse(updatedBrand)
    }
)


