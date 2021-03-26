var exec = require("cordova/exec");

module.exports = {
  watchVideo: function (moviePath, success, error) {
    exec(success, error, "rtsplayer", "watchVideo", [moviePath]);
  },
  watch: function (moviePath, user, password, success, error) {
    exec(success, error, "rtsplayer", "watch", [moviePath, user, password]);
  },
};
