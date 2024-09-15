import {getImageUrl} from './utils.js'

import {Gallery} from './gallery.js';

function Avatar({person, size}){
    return (
        <>
        <img
        
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        
        />

       
        </>
    );
}

function Card({children}){
    return(

        <div className="card">
            {children}
        </div>
    );

}



export default function Profile(name = 'gerrit?'){
    return (

        <div>

            <Card>
<Gallery
        name = {name}
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
 />

</Card>
        </div>
    );
}