import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { User } from "@shared/types/User";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("/api/users")
      .then((response) => {
        // Pull the array out of response.data, not response itself
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("Failed to load users:", err);
      });
  }, []);

  return (
    <Paper>
      <Typography variant="h6" sx={{ p: 2 }}>
        All Users
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["First Name", "Last Name", "Email", "Active"].map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.firstName}</TableCell>
                <TableCell>{u.lastName}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.active ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
