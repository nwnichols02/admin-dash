import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header2 from "../components/Header";

import ClerkProvider from "../integrations/clerk/provider";

import TanstackQueryLayout from "../integrations/tanstack-query/layout";

import TanstackQueryProvider from "../integrations/tanstack-query/provider";

import appCss from "../styles.css?url";
import { applyEdgeSidebarStyles, Content, EdgeSidebar, EdgeSidebarContent, Footer, Header, Root } from "../mui-treasury/layout-core-v6";
import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: () => (
		<RootDocument>
			<ClerkProvider>
				<TanstackQueryProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<DashboardLayout>
							{/* <Dashboard> */}
							<Outlet />
							{/* </Dashboard> */}
						</DashboardLayout>
					</ThemeProvider>
					<TanStackRouterDevtools />
					<TanstackQueryLayout />
				</TanstackQueryProvider>
			</ClerkProvider>
		</RootDocument>
	),
});

function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header>
				<Header2 />
			</Header>
			<EdgeSidebar
				sx={(theme) => ({
					...applyEdgeSidebarStyles({
						theme,
						config: {
							xs: {
								variant: "temporary",
							},
							md: {
								variant: "persistent",
							},
							lg: {
								variant: "permanent",
							},
						},
					}),
				})}
			>
				<EdgeSidebarContent>EdgeSidebar</EdgeSidebarContent>
			</EdgeSidebar>
			<Content>

				{children}
			</Content>
			<Footer>
				<Typography variant="body2" color="text.secondary">
					Footer
				</Typography>
			</Footer>
		</>
	)
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<link rel="icon" href="/public/favicon.ico" />
			</head>
			<body>
				<Root>
					{children}
					<Scripts />
				</Root>
			</body>
		</html>
	);
}
