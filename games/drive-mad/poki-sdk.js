/* Offline compatibility shim for the small Poki SDK surface used by Drive Mad. */
(function () {
  "use strict";
  var resolved = function (value) { return Promise.resolve(value); };
  var noop = function () {};

  window.PokiSDK = {
    init: function () { return resolved(); },
    setDebug: noop,
    gameLoadingStart: noop,
    gameLoadingFinished: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    commercialBreak: function () { return resolved(); },
    rewardedBreak: function () { return resolved(true); },
    displayAd: noop,
    destroyAd: noop,
    showLeaderboard: noop,
    customEvent: noop,
    measure: noop,
    muteAd: noop,
    unmuteAd: noop,
    isAdBlocked: function () { return false; },
  };
})();
