import { MODULE_NAME } from "../constants";

// Create new match if match maker has match
export function matchCreate(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  matchedUsers: nkruntime.MatchmakerResult[]
): string | void {
  // update fight session
  const players = matchedUsers
    .map((matchedUser) => matchedUser.presence.userId)
    .sort();

  return nk.matchCreate(MODULE_NAME, {
    fast: undefined,
    ai: undefined,
    userIds: JSON.stringify(players),
  });
}