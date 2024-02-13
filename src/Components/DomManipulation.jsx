// Method - 1 => "Change shape" button click cheyyunnathine anusarich circle and square shape maarunnath


// import React, { useState } from 'react'
// import '../Styles/DomManipulation.css'
// const DomManipulation = () => {
//     const [isCircle, setIsCircle] = useState(true);
//     return (
//         <div>
//             <div className={isCircle ? "circle" : "square"}></div>
//             <button onClick={() => setIsCircle(!isCircle)}>Change shape</button>
//         </div>
//     )
// }

// export default DomManipulation

//............................................................................................................................


//Method - 2 => input tag il type cheythath submit button click cheyyumbol erase aakunnath


import React, { useRef, useState } from 'react'
import '../Styles/DomManipulation.css'
const DomManipulation = () => {
    const nameInput = useRef(null);

    const clearInput = () =>{
        nameInput.current.value = "";
    }
    
    return (
        <div>
            <input type="text" placeholder='Write Your Name...' ref={nameInput}/>
            <button onClick={clearInput}>Submit</button>
        </div>
    )
}

export default DomManipulation