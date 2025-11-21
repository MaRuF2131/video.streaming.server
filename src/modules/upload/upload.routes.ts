import { Router } from "express";
import { uploadController } from "./upload.controller";
import { validateRequest } from "../../middlewares/validate.middleware";

import {
  createUploadRules,
  updateUploadRules,
  idParamRules,
  listUploadRules,
} from "./upload.rules.validation";

const router = Router();

// CREATE UPLOAD
router.post(
  "/",
  validateRequest(createUploadRules),
  uploadController.create
);

// LIST UPLOAD + PAGINATION
router.get(
  "/",
  validateRequest(listUploadRules),
  uploadController.list
);

// UPDATE UPLOAD
router.put(
  "/:id",
  validateRequest({ ...idParamRules, ...updateUploadRules }),
  uploadController.update
);

// DELETE UPLOAD
router.delete(
  "/:id",
  validateRequest(idParamRules),
  uploadController.remove
);

export default router;
