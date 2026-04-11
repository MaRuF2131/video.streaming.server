"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_controller_1 = require("../controller/upload.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const upload_rules_validation_1 = require("../validationRules/upload.rules.validation");
const router = (0, express_1.Router)();
// CREATE UPLOAD
router.post("/", (0, validate_middleware_1.validateRequest)(upload_rules_validation_1.createUploadRules), upload_controller_1.uploadController.create);
// LIST UPLOAD + PAGINATION
router.get("/", (0, validate_middleware_1.validateRequest)(upload_rules_validation_1.listUploadRules), upload_controller_1.uploadController.list);
// UPDATE UPLOAD
router.put("/:id", (0, validate_middleware_1.validateRequest)({ ...upload_rules_validation_1.idParamRules, ...upload_rules_validation_1.updateUploadRules }), upload_controller_1.uploadController.update);
// DELETE UPLOAD
router.delete("/:id", (0, validate_middleware_1.validateRequest)(upload_rules_validation_1.idParamRules), upload_controller_1.uploadController.remove);
exports.default = router;
//# sourceMappingURL=upload.routes.js.map