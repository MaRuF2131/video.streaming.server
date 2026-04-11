"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRoomRules = exports.idParamRules = exports.updateRoomRules = exports.createRoomRules = void 0;
const validation_1 = require("../utils/validation");
const validator_1 = __importDefault(require("validator"));
exports.createRoomRules = {
    category: [
        [(v) => (0, validation_1.isValidString)(v, 3, 500), "Category is invalid"],
        [(v) => (0, validation_1.isRequired)(v), "Category is required"]
    ],
};
exports.updateRoomRules = {
    category: [
        [(v) => (0, validation_1.isValidString)(v, 3, 500), "Category is invalid"],
        [(v) => (0, validation_1.isRequired)(v), "Category is required"]
    ],
};
exports.idParamRules = {
    id: [
        [(v) => validator_1.default.isMongoId(String(v)), "Invalid RoomTable ID"],
        [(v) => (0, validation_1.isRequired)(v), "RoomTable ID is required"],
        [(v) => (0, validation_1.isValidString)(v, 24, 24), "RoomTable ID must be 24 characters"]
    ],
};
exports.listRoomRules = {
    page: [
        [(v) => v === undefined || validator_1.default.isInt(String(v)), "page must be number"],
        [(v) => (0, validation_1.isValidNumber)(v, 0), "page must be at least 0"],
    ],
    limit: [
        [(v) => v === undefined || validator_1.default.isInt(String(v)), "limit must be number"],
        [(v) => (0, validation_1.isValidNumber)(v, 1), "limit must be at least 1"],
    ],
    search: [
        [(v) => v === undefined || typeof v === "string", "search must be text"],
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 1, 255), "search is invalid"]
    ],
};
//# sourceMappingURL=room.rules.validation.js.map