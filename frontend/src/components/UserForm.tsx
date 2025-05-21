import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";
import { User } from "@shared/types/User";

export default function UserForm() {
  const [form, setForm] = useState<Omit<User, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    active: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, active: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post<User>("/api/users", form);
    // optionally clear or signal success…
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New User
      </Typography>
      <Stack component="form" spacing={2} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <FormControlLabel
          control={
            <Switch
              checked={form.active}
              onChange={handleToggle}
              name="active"
            />
          }
          label="Active"
        />
        <Button type="submit" variant="contained">
          Create User
        </Button>
      </Stack>
    </Paper>
  );
}
