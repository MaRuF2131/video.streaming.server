"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUploadRules = exports.idParamRules = exports.updateUploadRules = exports.createUploadRules = void 0;
const validation_1 = require("../utils/validation");
const validator_1 = __importDefault(require("validator"));
/* ============================================================
   CREATE UPLOAD RULES
   Required:
   - name (string)
   - title (string)
   - roomTableId (MongoId)
   Optional:
   - description (string)
   - chatListId (MongoId)
   - rating (number)
   ============================================================ */
exports.createUploadRules = {
    name: [
        [(v) => (0, validation_1.isRequired)(v), "Name is required"],
        [(v) => (0, validation_1.isValidString)(v, 2, 200), "Name must be 2–200 characters"]
    ],
    title: [
        [(v) => (0, validation_1.isRequired)(v), "Title is required"],
        [(v) => (0, validation_1.isValidString)(v, 2, 200), "Title must be 2–200 characters"]
    ],
    description: [
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 0, 2000), "Description is invalid"]
    ],
    videoFilesList: [
        [
            (v) => v === undefined || Array.isArray(v),
            "videoFilesList must be an array"
        ]
    ],
    roomTableId: [
        [(v) => (0, validation_1.isRequired)(v), "RoomTable ID is required"],
        [(v) => validator_1.default.isMongoId(String(v)), "Invalid RoomTable ID"]
    ],
    chatListId: [
        [
            (v) => v === undefined || validator_1.default.isMongoId(String(v)),
            "Invalid ChatList ID"
        ]
    ],
    rating: [
        [
            (v) => v === undefined || (0, validation_1.isValidNumber)(v, 0, 5),
            "Rating must be between 0–5"
        ]
    ],
};
/* ============================================================
   UPDATE UPLOAD RULES
   Only updatable fields:
   - name
   - title
   - description
   - rating
   ============================================================ */
exports.updateUploadRules = {
    name: [
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 2, 200), "Name must be 2–200 characters"]
    ],
    title: [
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 2, 200), "Title must be 2–200 characters"]
    ],
    description: [
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 0, 2000), "Description is invalid"]
    ],
    rating: [
        [
            (v) => v === undefined || (0, validation_1.isValidNumber)(v, 0, 5),
            "Rating must be between 0–5"
        ]
    ],
};
/* ============================================================
   ID PARAM RULES
   For: /uploads/:id
   ============================================================ */
exports.idParamRules = {
    id: [
        [(v) => (0, validation_1.isRequired)(v), "Upload ID is required"],
        [(v) => validator_1.default.isMongoId(String(v)), "Invalid Upload ID"],
        [(v) => (0, validation_1.isValidString)(v, 24, 24), "Upload ID must be 24 characters"]
    ],
};
/* ============================================================
   LIST + PAGINATION RULES
   ============================================================ */
exports.listUploadRules = {
    page: [
        [(v) => v === undefined || validator_1.default.isInt(String(v)), "page must be number"],
        [(v) => v === undefined || (0, validation_1.isValidNumber)(v, 1), "page must be >= 1"]
    ],
    limit: [
        [(v) => v === undefined || validator_1.default.isInt(String(v)), "limit must be number"],
        [(v) => v === undefined || (0, validation_1.isValidNumber)(v, 1), "limit must be >= 1"]
    ],
    search: [
        [(v) => v === undefined || typeof v === "string", "search must be text"],
        [(v) => v === undefined || (0, validation_1.isValidString)(v, 1, 255), "search is invalid"]
    ],
};
//# sourceMappingURL=upload.rules.validation.js.map