import { registerApplication, start } from "single-spa";

// Naranjita -> #F7931E
// Rojito -> #ED1C24
// Negro pinero -> #352B26
// Verdecito -> #cdee96

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
