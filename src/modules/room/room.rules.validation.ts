import { isRequired, isValidNumber, isValidString } from "../../utils/validation";
import validator from "validator";

export const createRoomRules = {
  category: [
    [(v: any) => isValidString(v,3,500), "Category is invalid"],
    [(v: any) => isRequired(v), "Category is required"]
  ],
};

export const updateRoomRules = {
  category: [
    [(v: any) => isValidString(v,3,500), "Category is invalid"],
    [(v: any) => isRequired(v), "Category is required"]
  ],
};

export const idParamRules = {
  id: [
    [(v: any) => validator.isMongoId(String(v)), "Invalid RoomTable ID"],
    [(v: any) => isRequired(v), "RoomTable ID is required"],
    [(v: any) => isValidString(v,24,24), "RoomTable ID must be 24 characters"]
  ],
};

export const listRoomRules = {
  page: [
    [(v: any) => v === undefined || validator.isInt(String(v)), "page must be number"],
    [(v: any) => isValidNumber(v, 0), "page must be at least 0"],
  ],
  limit: [
    [(v: any) => v === undefined || validator.isInt(String(v)), "limit must be number"],
    [(v: any) => isValidNumber(v, 1), "limit must be at least 1"],
  ],
  search: [
    [(v: any) => v === undefined || typeof v === "string", "search must be text"],
    [(v: any) => v === undefined || isValidString(v, 1, 255), "search is invalid"]
  ],
};
