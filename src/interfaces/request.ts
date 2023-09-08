import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { AuthType } from "./empleado";

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}
