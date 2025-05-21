import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import UsersPage from "./pages/UserPages"; // adjust path if needed

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">User Management</Typography>
        </Toolbar>
      </AppBar>
      <UsersPage />
    </ThemeProvider>
  );
}

export default App;
