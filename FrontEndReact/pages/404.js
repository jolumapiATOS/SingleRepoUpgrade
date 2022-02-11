import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout( () => {
            router.push('/');
        }, 3000 )
    }, [router])

    return ( 
        <div className="not-found">
            <h1>Ooops</h1>
            <h2>The page cannot be found</h2>
            <Link href="/">
                <a>Go back to the homepage </a>
            </Link>
        </div>
     );
}
 
export default NotFound;