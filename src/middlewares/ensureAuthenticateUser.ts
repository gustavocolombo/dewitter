import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  sub: string;
}

export default function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(404).json({ message: "JWT Token is missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "a3dcb4d229de6fde0db5686dee47145d"
    ) as TokenPayload;

    request.user_id = sub;

    return next();
  } catch {
    return response
      .status(400)
      .json({ message: "Cannot performat this function" });
  }
}
