self.onmessage = (auth) => {
    let token = auth.data;
    let data;
    let queryData;

    const request = indexedDB.open("AtosDB", 1);
    request.onerror = function(event) {
        console.log("Encounter an error inside the DB");
      };
    request.onsuccess = function(event) {
        const db = request.result;
        const transaction = db.transaction('messages', 'readwrite');
        const store = transaction.objectStore('messages');
        const query = store.getAll();
        query.onsuccess = function() {
            console.log(query.result)
            queryData = query.result
           sendInfo(queryData);
        }
    }

    async function sendInfo (message)  {
        fetch("https://node-server-for-upgrade.herokuapp.com/postingAllMessages", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Auth: token
            },
            body: JSON.stringify({messages: message})
        }).then( response => {
            if(response.status === 201) {
                return response.json()
            }
        }).then( data => {
            self.postMessage(data.notification)
        })
    }

    // const resp = await fetch("http://localhost:8000/message/new", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Auth: token
    //     },
    //     body: JSON.stringify({messageUser: message})
    // }).catch( e => { console.log(e) } )
    // data = await resp.json();
    // }
    
    
}