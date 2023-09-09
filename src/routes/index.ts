import { Router } from "express";
import { readdirSync } from "fs";
import { controlarJWT } from "../middlewares/session.middleware";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    if (cleanName !== "auth") {
      import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName}`, controlarJWT, moduleRouter.router);
      });
    } else {
      import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router);
      });
    }
  }
});

export { router };
