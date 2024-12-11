import { Club as TClub } from "../api/club/Club";

export const CLUB_TITLE_FIELD = "id";

export const ClubTitle = (record: TClub): string => {
  return record.id?.toString() || String(record.id);
};
