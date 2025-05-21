import { Router } from "express";
import { v4 as uuid } from "uuid";
import { User } from "@shared/types/User";
import { userSchema, NewUser } from "src/schemas/user";

const router = Router();
const users: User[] = [];

router.get("/", (req: any, res: any) => res.json(users));

router.post("/", (req: any, res: any) => {
  const parsed = userSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }
  const newUser: User = { id: uuid(), ...(parsed.data as NewUser) };
  users.push(newUser);
  res.status(201).json(newUser);
});

//UPDATE (PUT) /api/users/:id
router.put("/:id", (req: any, res: any) => {
  const idx = users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const parsed = userSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  users[idx] = { id: req.params.id, ...parsed.data };
  return res.json(users[idx]);
});
//DELETE /api/users/:id
router.delete("/:id", (req: any, res: any) => {
  const idx = users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(idx, 1);
  return res.status(204).end();
});

export default router;
