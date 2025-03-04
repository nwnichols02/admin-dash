import { createFileRoute } from "@tanstack/react-router";
import { Typography, useTheme } from "@mui/material";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const theme = useTheme();
	return (
		<>
			<Typography variant="h1" sx={{ color: theme.palette.primary.main }}>hello world</Typography>
		</>
	);
}
