import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        if (id === 'jvale') {
            setName('Juana Valentina')
        } else if (id === 'juan') {
            setName('Juan David')
        }
    }, [id])

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>User {name}</h1>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f0f0',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
}

export default User




// import React from 'react'
// import {useParams} from 'react-router-dom'


// function User() {
//     const {id} = useParams()
//     const [name, setName] = React.useState('')

//     React.useEffect(() => {
//         if (id === 'jvale') {
//             setName('Juana Valentina')
//         } else if (id === 'juan') {
//             setName('Juan David')
//         }
//     }, {})

//     return(
//         <h1>User {name}</h1>
//     )
// }

// export default User