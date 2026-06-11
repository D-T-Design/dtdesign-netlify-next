import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "m8vumzjq",
    dataset: "production",
  },
  deployment: {
    appId: "0446858963c91c1dacb8d2c9",
    autoUpdates: true,
  },
});
