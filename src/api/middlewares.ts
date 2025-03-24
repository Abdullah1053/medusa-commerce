import { 
    defineMiddlewares,
    validateAndTransformBody,
  } from "@medusajs/framework/http"
  import { createBrandSchema, updateBrandSchema } from "./admin/brands/validations"
  
  export default defineMiddlewares({
    routes: [
      {
        matcher: "/admin/brands",
        method: "POST",
        middlewares: [
          validateAndTransformBody(createBrandSchema),
        ],
      },
      {
        matcher: "/admin/brands/:id",
        method: "PUT",
        middlewares: [
          validateAndTransformBody(updateBrandSchema),
        ],
      },
      {
        matcher: "/admin/brands/:id",
        method: "DELETE",
      },
      {
        matcher: "/admin/brands/:id",
        method: "GET",
      },
      {
        matcher: "/admin/brands",
        method: "GET",
      },
    ],
  })