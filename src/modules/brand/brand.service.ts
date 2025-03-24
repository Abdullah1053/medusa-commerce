import { MedusaService } from "@medusajs/framework/utils"
import { Brand } from "./models/brand"

class BrandModuleService extends MedusaService({
  Brand,
}) {
  // The service factory already generates methods like:
  // - createBrands
  // - listBrands
  // - retrieveBrand
  // - updateBrands
  // - deleteBrands
  // So you don't need to implement them manually
}

export default BrandModuleService