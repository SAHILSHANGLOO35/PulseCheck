import { Router } from "express";
import { AuthInput } from "../../validation";
import { prisma } from "@repo/db/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const data = AuthInput.safeParse(req.body);
    if (!data.success) {
      res.status(403).send({ message: "Invalid or missing inputs" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { username: data.data.username },
    });

    if (user) {
      console.log("User already in Database");
      res.status(409).json({ message: "User already in Database", user });
      return;
    }

    const hashedPassword = await bcrypt.hash(data.data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: data.data.username,
        password: hashedPassword,
      },
    });

    const { password, ...userWithoutPassword } = newUser;
    res.status(200).json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
    return;
  } catch (error) {
    console.error("Error while signing up", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const data = AuthInput.safeParse(req.body);
    if (!data.success) {
      res.status(403).send({ message: "Invalid or missing inputs" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { username: data.data.username },
    });

    if (!user) {
      res.status(403).send({ message: "User not found" });
      return;
    }

    const matchPassword = await bcrypt.compare(
      data.data.password,
      user?.password
    );

    if (!matchPassword) {
      res.status(403).send({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Sign in successful", token: token });
    return;
  } catch (error) {
    console.error("Error while signing in", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

export default userRouter;
