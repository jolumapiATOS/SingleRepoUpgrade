import styles from '../styles/Home.module.css';

const PoolMessages = ({ messages }) => {
    let elements;
    if( messages ){
        elements = messages.map( (message, index) => {
            return (
                <div key={ index } className={ styles.container }>
                    <em className={ styles.paragraph }> by:  { message[0] } </em>
                    <p> { message[1] } </p>
                </div>
            )
        })
    }
    return ( 
        <section className='p-4'>
            <h1 className={ styles.titleForReview }>Review</h1>
            { elements }
        </section>
     );
}
export default PoolMessages;