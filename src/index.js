import React from 'react'
import {render} from 'react-fom'

function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
render(<HelloWorld/>,document.getElementById('root'))

