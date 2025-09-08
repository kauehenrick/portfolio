import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import "./i18n";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
	<>
		<Toaster />
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</>,
);
