import { useEffect, useState } from "react";

const Entries = () => {
    const [ info, setInfo ] = useState(null);
    
    useEffect(()=> {
        let db;
        const request = indexedDB.open("AtosUpgrade", 1);

        request.onerror = function(e) {
            console.log(e)
        }
        request.onsuccess = function(e) {
            db = e.target.result;
            let transaction = db.transaction('entries', "readwrite");
            let store = transaction.objectStore('entries');
            let query = store.getAll();
            query.onsuccess = (e) => {
                console.log(e.target.result)
                let reversed = e.target.result;
                let formatting = reversed.reverse();
                setInfo(formatting);
            }
        } 
    }, [])    
    return ( 
        <div className="contents-conatiner-entries">
            { info && info.map( (item, index) => { 
                return (
                    <div key={index} className="card-for-messages">
                        <h3> {item.title} </h3>
                        <p> {item.content} </p>
                    </div>
                    )   
             }) }
        </div>
     );
}
 
export default Entries;