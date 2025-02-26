import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "form",
    file: "routes/form.tsx",
  },
  {
    path: "profile",
    file: "routes/profile.tsx",
  },
] satisfies RouteConfig;
