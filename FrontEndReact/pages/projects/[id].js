export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map( user => { 
        return { 
            params: { id: user.id.toString() }
         }
     });

    return { 
        paths: paths,
        fallback: false
     }
}

export const getStaticProps = async ( context ) => {
    const id = context.params.id;
    const res = fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await (await res).json();

    return { 
        props: { user: data } 
     }

}

const Details = ({ user }) => {
    return ( 
        <div>
            <h1> {  user.name } </h1>
            <p> { user.email } </p>
            <p> { user.address["street"] } </p>
        </div>
     );
}
 
export default Details;