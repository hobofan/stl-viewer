(function () {
  "use strict";

  var PathWatcher = require('pathwatcher');

  app.service('fileWatch', [

    function () {

      function watchPath(filePath, callback) {

        var watcher = PathWatcher.watch(filePath,
          function(event, path) {
              if (event == "change" || event == "rename") {
                callback(path);
                watcher.close();
              } else if (event == "delete"){
                // Very hacky workaround; Some editors like vim emit a delete event instead of a change event.
                // That results in the watcher being closed and the file temporarily being nonexistent so we
                // have to wait for the new file to take place before setting a new watcher.
                setTimeout(function(){
                  callback(path);
                  watcher.close();
                }, 100)
              }
          });
      }

      return {
        watchPath: watchPath
      };
    }
  ]);
}());
