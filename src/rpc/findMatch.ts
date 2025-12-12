export const rpcFindMatch: nkruntime.RpcFunction = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  payload: string
) {
  if (!ctx.userId)
    throw {
      message: "Context No UserID",
    };
  try {
    const query = `+label.players:${ctx.userId}`;
    let matches = nk.matchList(1, true, "label", 0, 1, query);
    return JSON.stringify({ matchId: matches[0]?.matchId });
  } catch (error) {
    logger.error("Listing match error: %v", error);
    throw error;
  }
};