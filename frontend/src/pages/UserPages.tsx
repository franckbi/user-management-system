import React from "react";
import { Container, Stack, Box } from "@mui/material";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

/**
 * The UsersPage component renders the main user management layout,
 * displaying the list of users alongside the user creation form.
 */
const UsersPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box flex={1}>
          <UserList />
        </Box>
        <Box flex={1}>
          <UserForm />
        </Box>
      </Stack>
    </Container>
  );
};

export default UsersPage;
