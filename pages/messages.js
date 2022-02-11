import { useEffect, useState } from "react";
import Cardmessage from "../components/CardMessage";

const ListAllMessages = () => {
    const [messages, setMessages] = useState(null);
    // const abortCont = new AbortController();
    //     fetch('https://node-server-for-upgrade.herokuapp.com/getMyMessages', {
    //         signal: abortCont.signal,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Auth: self.localStorage.Auth
    //         }
    //     }).then(response => {
    //         return response.json();
    //     }).then( data => {
    //         setLoading(null);
    //         setMessages(data.messages);
    //     }).catch(e => { console.log(e) })
    //         setLoading(null)
    //     return () => abortCont.abort();
    useEffect(()=> {
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
                let queryMessages = [];
                query.result.forEach(e => {
                    queryMessages.push( e.message ); 
                })
                let reversedArray = queryMessages.reverse();
                setMessages( reversedArray );
            }
        };
    }, [])
    
    return ( 
        <div className="p-4">
            { (messages === null) && <div id="spinner-for-teacher" className="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> }
            { (messages === null) ? <h1>Loading....</h1> : <h1 id="title-advancements-head">Advancements</h1>}
            <div>
            { messages && messages.map( (m, index) => { return <Cardmessage key={index} index={ index + 1 } message={ m } />   }) }
            </div>
        </div>
     );
}
 
export default ListAllMessages;