self.onmessage = (message) => {

    console.log("Started a new thread");
    let db;
    const request = indexedDB.open("AtosUpgrade", 1);

    request.onerror = function(e) {
        console.log(e)
    }
    request.onsuccess = function(e) {
        db = e.target.result;
    }
    request.onupgradeneeded = function(e) {
        db = e.target.result;
        db.createObjectStore("entries", { autoIncrement : true });
    }

    self.postMessage("Finished");
}