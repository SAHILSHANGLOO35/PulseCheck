import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware( req: Request, res: Response, next: NextFunction ): void {
    try {
        const header = req.headers.token;
        if (!header) {
            res.json({ message: "Unauthorized" });
            return;
        };

        // @ts-ignore
        const data = jwt.verify(header, process.env.JWT_SECRET!);
        req.userId = data.sub as string;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: "Authorization failed" });
        return;
    }
}
