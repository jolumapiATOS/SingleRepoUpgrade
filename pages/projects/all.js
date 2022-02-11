import Link from "next/link";

export const getStaticProps = async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { users: data }
    }
}

const Projects = ({ users }) => {
    return ( 
        <div>
            <h1>All concerned users</h1>
            { users.map( user => (
                <Link key={ user.id } href={"/projects/" + user.id }>
                    <a >
                        <h3>
                            { user.name }
                        </h3>
                    </a>
                </Link>
            ) ) }
        </div>
     );
}
 
export default Projects;