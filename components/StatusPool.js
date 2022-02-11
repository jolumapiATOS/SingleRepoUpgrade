const StatusPool = ({ counting, error }) => {
    console.log( counting )
    return ( 
        <>
            { counting === 0 && <div id="spinner-for-teacher" className="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
            </div> }
            <div className="p-4 container-status">
            { (counting !== 0) && ( error === null )  ?  <h2 className="text-light m-0">Uploaded: { counting } </h2> : <h2 className="text-light m-0"> Loading </h2> }
            </div>
        </>
     );
}
 
export default StatusPool;