import { model } from "@medusajs/framework/utils";

export const Brand = model.define("brand", {
    id: model.id().primaryKey(),
    name: model.text(),
    description: model.text(),
    logo: model.text(),
    website: model.text(),
    isActive: model.boolean().default(true),
});

export type Brand = typeof Brand;


