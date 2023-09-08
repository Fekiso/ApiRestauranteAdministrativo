import { NextFunction, Request, Response } from "express";

const logMiddelware = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export { logMiddelware };
