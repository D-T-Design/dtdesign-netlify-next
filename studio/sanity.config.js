import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "david-torres-design",
  projectId: "m8vumzjq",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
