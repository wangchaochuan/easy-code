import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/router";
import SuspenseWrapper from "@/components/suspense-wrapper";

const Home = lazy(() => import("@/views/home/index"));
const FlowEditor = lazy(() => import("@/views/flow-editor"));
const FormEditor = lazy(() => import("@/views/form-editor"));
const NotFound = lazy(() => import("@/views/not-found"));

const router = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <Navigate to={ROUTES.HOME} replace />,
  },
  {
    path: ROUTES.HOME,
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },
  {
    path: ROUTES.FLOW_EDITOR,
    element: (
      <SuspenseWrapper>
        <FlowEditor />
      </SuspenseWrapper>
    ),
  },
  {
    path: ROUTES.FORM_EDITOR,
    element: (
      <SuspenseWrapper>
        <FormEditor />
      </SuspenseWrapper>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
