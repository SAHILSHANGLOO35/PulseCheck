import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = header.split(" ")[1];
    // @ts-ignore
    const data = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    req.userId = data.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Authorization failed" });
    return;
  }
}
