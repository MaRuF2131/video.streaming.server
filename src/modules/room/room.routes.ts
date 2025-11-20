import { Router } from "express";
import { roomController } from "./room.controller";
import { validateRequest } from "../../middlewares/validate.middleware";

import {
  createRoomRules,
  updateRoomRules,
  idParamRules,
  listRoomRules
} from "./room.rules.validation";

const router = Router();

// CREATE ROOM
router.post(
  "/",
  validateRequest(createRoomRules),
  roomController.create
);

// LIST ROOM + PAGINATION
router.get(
  "/",
  validateRequest(listRoomRules),
  roomController.list
);

// UPDATE ROOM
router.put(
  "/:id",
  validateRequest({ ...idParamRules, ...updateRoomRules }),
  roomController.update
);

// DELETE ROOM
router.delete(
  "/:id",
  validateRequest(idParamRules),
  roomController.remove
);

export default router;
