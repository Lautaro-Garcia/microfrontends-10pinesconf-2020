import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lauta/left-panel",
  app: () => System.import("@lauta/left-panel"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lauta/right-panel",
  app: () => System.import("@lauta/right-panel"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@lauta/main",
  app: () => System.import("@lauta/main"),
  activeWhen: ["/"],
});

start({ urlRerouteOnly: true });
