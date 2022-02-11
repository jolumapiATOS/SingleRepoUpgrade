import Head from "next/head";

const  About = () => {
    return ( 
        <>
            <Head>
            <title> UPgrade | Jose Luis Matias Pineda  </title>
            <meta name='keywords' content='Tech Services'/>
            </Head>
            <div>
                <h1>About me</h1>
                <p> 
                    i consider myself selftaught although that is not completly accurate. Ive taken several courses throughout
                    my life as a developer. The first thing i developed was an app for managing condos. The second one was for conducting
                    promptly diagnostics. 
                </p>
                <strong>Back End Technologies</strong>
                <ul>
                    <li> Ruby on Rails </li>
                    <li> JavaScript/ NodeJS / Express </li>
                    <li> Java </li>
                </ul>
                <strong>Front End Technologies</strong>
                <ul>
                    <li> JavaScript / Vanilla / Jquery / ES6 / Promises / Async </li>
                    <li> React  </li>
                    <li> Next JS </li>
                    <li> TypeScript </li>
                </ul>
                <p>
                  Jose Luis Matias Pineda
                </p>
            </div>
        </>
     );
}
 
export default About;