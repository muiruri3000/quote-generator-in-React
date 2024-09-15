export default function Presser({updatedQoute}){
    return(

        <div className='btnDiv'>
        <button onClick={updatedQoute} className='btn'>Click to Generate Quote</button>
        </div>
    );
}