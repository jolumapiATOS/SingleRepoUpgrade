import { useState } from "react";

const CreateEntry = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(window.indexedDB) {
            let db;
            const request = window.indexedDB.open("AtosUpgrade", 1);
            request.onerror = function(e) {
                console.log(e)
            }
            request.onsuccess = function(e) {
                db = e.target.result;
                let transaction = db.transaction('entries', "readwrite");
                let store = transaction.objectStore('entries');
                const request = store.add({ title, content });
                request.onsuccess = () => {
                    window.alert("Successfully saved")
                }
            }
            setContent("");
            setTitle("");
        } else {
            window.alert("Please update your browser");
        }
    }


    return ( 
        <div className="container-for-new-entry">
            <h1>Enter</h1>
            <form>
                <input data-testid="testing-input-1" value={title} placeholder="Title" type="text" onChange={ (e) => { setTitle(e.target.value) } }  />
                <input data-testid="testing-input-2" value={content} placeholder="Enter your message" type="text" onChange={ (e) => { setContent(e.target.value) } } />
                <button className="btn btn-primary" onClick={ (e)=>{ handleSubmit(e) } }> Submit </button>
            </form>
        </div>
     );
}
 
export default CreateEntry;