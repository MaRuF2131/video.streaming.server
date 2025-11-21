import { isRequired, isValidNumber, isValidString } from "../../utils/validation";
import validator from "validator";

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
export const createUploadRules = {
  name: [
    [(v: any) => isRequired(v), "Name is required"],
    [(v: any) => isValidString(v, 2, 200), "Name must be 2–200 characters"]
  ],

  title: [
    [(v: any) => isRequired(v), "Title is required"],
    [(v: any) => isValidString(v, 2, 200), "Title must be 2–200 characters"]
  ],

  description: [
    [(v: any) => v === undefined || isValidString(v, 0, 2000), "Description is invalid"]
  ],

  videoFilesList: [
    [
      (v: any) => v === undefined || Array.isArray(v),
      "videoFilesList must be an array"
    ]
  ],

  roomTableId: [
    [(v: any) => isRequired(v), "RoomTable ID is required"],
    [(v: any) => validator.isMongoId(String(v)), "Invalid RoomTable ID"]
  ],

  chatListId: [
    [
      (v: any) => v === undefined || validator.isMongoId(String(v)),
      "Invalid ChatList ID"
    ]
  ],

  rating: [
    [
      (v: any) => v === undefined || isValidNumber(v, 0, 5),
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
export const updateUploadRules = {
  name: [
    [(v: any) => v === undefined || isValidString(v, 2, 200), "Name must be 2–200 characters"]
  ],

  title: [
    [(v: any) => v === undefined || isValidString(v, 2, 200), "Title must be 2–200 characters"]
  ],

  description: [
    [(v: any) => v === undefined || isValidString(v, 0, 2000), "Description is invalid"]
  ],

  rating: [
    [
      (v: any) => v === undefined || isValidNumber(v, 0, 5),
      "Rating must be between 0–5"
    ]
  ],
};

/* ============================================================
   ID PARAM RULES
   For: /uploads/:id
   ============================================================ */
export const idParamRules = {
  id: [
    [(v: any) => isRequired(v), "Upload ID is required"],
    [(v: any) => validator.isMongoId(String(v)), "Invalid Upload ID"],
    [(v: any) => isValidString(v, 24, 24), "Upload ID must be 24 characters"]
  ],
};

/* ============================================================
   LIST + PAGINATION RULES
   ============================================================ */
export const listUploadRules = {
  page: [
    [(v: any) => v === undefined || validator.isInt(String(v)), "page must be number"],
    [(v: any) => v === undefined || isValidNumber(v, 1), "page must be >= 1"]
  ],

  limit: [
    [(v: any) => v === undefined || validator.isInt(String(v)), "limit must be number"],
    [(v: any) => v === undefined || isValidNumber(v, 1), "limit must be >= 1"]
  ],

  search: [
    [(v: any) => v === undefined || typeof v === "string", "search must be text"],
    [(v: any) => v === undefined || isValidString(v, 1, 255), "search is invalid"]
  ],
};
