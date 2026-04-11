"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = require("../controller/room.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const room_rules_validation_1 = require("../validationRules/room.rules.validation");
const router = (0, express_1.Router)();
// CREATE ROOM
router.post("/create", (0, validate_middleware_1.validateRequest)(room_rules_validation_1.createRoomRules), room_controller_1.roomController.create);
// LIST ROOM + PAGINATION
router.get("/get", (0, validate_middleware_1.validateRequest)(room_rules_validation_1.listRoomRules), room_controller_1.roomController.list);
// UPDATE ROOM
router.put("/:id", (0, validate_middleware_1.validateRequest)({ ...room_rules_validation_1.idParamRules, ...room_rules_validation_1.updateRoomRules }), room_controller_1.roomController.update);
// DELETE ROOM
router.delete("/:id", (0, validate_middleware_1.validateRequest)(room_rules_validation_1.idParamRules), room_controller_1.roomController.remove);
exports.default = router;
//# sourceMappingURL=room.routes.js.map