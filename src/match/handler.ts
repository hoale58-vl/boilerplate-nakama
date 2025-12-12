export interface MatchLabel {
    open: number;
    fast: number;
    players: string[];
}

export interface State {
}

export function matchInit(
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    params: { [key: string]: string }
): { state: State, tickRate: number, label: string } {
    return {
        state: {},
        tickRate: 10,
        label: ""
    };
};

export function matchJoinAttempt(
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    dispatcher: nkruntime.MatchDispatcher,
    tick: number,
    state: State,
    presence: nkruntime.Presence,
    metadata: { [key: string]: any }
) {
    return {
        state,
        accept: true,
    };
};

export const matchJoin: nkruntime.MatchJoinFunction<State> = function (
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    dispatcher: nkruntime.MatchDispatcher,
    tick: number,
    state: State,
    presences: nkruntime.Presence[]
) {
    return { state };
};

export const matchLoop: nkruntime.MatchLoopFunction<State> = function (
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    dispatcher: nkruntime.MatchDispatcher,
    tick: number,
    state: State,
    messages: nkruntime.MatchMessage[]
) {
    logger.debug("Running match loop. Tick: %d", tick);
    return { state };
};

export const matchTerminate: nkruntime.MatchTerminateFunction<State> =
    function (
        ctx: nkruntime.Context,
        logger: nkruntime.Logger,
        nk: nkruntime.Nakama,
        dispatcher: nkruntime.MatchDispatcher,
        tick: number,
        state: State,
        graceSeconds: number
    ) {
        return { state };
    };

export const matchSignal: nkruntime.MatchSignalFunction<State> = function (
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    dispatcher: nkruntime.MatchDispatcher,
    tick: number,
    state: State
) {
    return { state };
};

export const matchLeave: nkruntime.MatchLeaveFunction<State> = function (
    ctx: nkruntime.Context,
    logger: nkruntime.Logger,
    nk: nkruntime.Nakama,
    dispatcher: nkruntime.MatchDispatcher,
    tick: number,
    state: State,
    presences: nkruntime.Presence[]
) {
    return { state };
};