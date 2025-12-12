import { MODULE_NAME } from "./constants";
import { disableAuth } from "./hook/auth";
import { beforeAdd } from "./maker/beforeAdd";
import { matchCreate } from "./maker/matchCreate";
import {
    matchInit, matchJoinAttempt,
    matchJoin,
    matchLeave,
    matchLoop,
    matchTerminate,
    matchSignal,
} from "./match/handler";
import { rpcFindMatch } from "./rpc/findMatch";
import { rpcHealthCheck } from "./rpc/healthcheck";

function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    // hooks
    initializer.registerBeforeAuthenticateEmail(disableAuth);
    initializer.registerBeforeAuthenticateGoogle(disableAuth);
    initializer.registerBeforeAuthenticateApple(disableAuth);
    initializer.registerBeforeAuthenticateFacebook(disableAuth);
    initializer.registerBeforeAuthenticateGameCenter(disableAuth);
    initializer.registerBeforeAuthenticateSteam(disableAuth);

    // initializer.registerAfterAuthenticateDevice(afterAuth);
    // initializer.registerBeforeAuthenticateCustom(beforeAuth);
    // initializer.registerAfterAuthenticateCustom(afterAuth);

    // match maker
    initializer.registerRtBefore("MatchmakerAdd", beforeAdd);
    initializer.registerMatchmakerMatched(matchCreate);

    // rpcs
    initializer.registerRpc("healthcheck", rpcHealthCheck);
    initializer.registerRpc("findMatch", rpcFindMatch);

    // match handler
    initializer.registerMatch(MODULE_NAME, {
        matchInit,
        matchJoinAttempt,
        matchJoin,
        matchLeave,
        matchLoop,
        matchTerminate,
        matchSignal,
    });
}

!InitModule && InitModule.bind(null);