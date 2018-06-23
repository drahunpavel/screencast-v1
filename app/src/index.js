import React from 'react'
import { render } from 'react-dom'

function Article() {
    const body = <section>body</section>;
    return (
        <div className="helo" style={{color:'red'}}>
            <h1>Title</h1>
            {body}// const body
            <h3>creation date: {(new Date).toDateString()}</h3>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>App Name</h1>
            <Article/>
        </div>
    )
}
render(<App />, document.getElementById('root'))