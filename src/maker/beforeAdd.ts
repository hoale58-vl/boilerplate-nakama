
// Add mmr to filter opponents
export function beforeAdd(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  envelope: nkruntime.EnvelopeMatchmakerAdd
): nkruntime.EnvelopeMatchmakerAdd {
  let { maxCount, query } = envelope.matchmakerAdd;

  const mmrToMatch = 1000;

  // process query params
  const diff = Math.min(Math.max(maxCount, 1), 3) * 50;

  logger.info("beforeAdd MatchmakerAdd - %v", query);

  const queryConditions = [
    `+properties.mmr:<=${mmrToMatch + diff}`,
    `+properties.mmr:>=${mmrToMatch - diff}`,
  ];
  query += " " + queryConditions.join(" ");

  const matchmakerAdd: nkruntime.MatchmakerAddMessage = {
    ...envelope.matchmakerAdd,
    query,
    numericProperties: {
      mmr: mmrToMatch,
    },
  };
  return { matchmakerAdd };
}