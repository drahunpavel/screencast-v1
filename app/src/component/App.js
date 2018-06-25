import React from 'react'
import Article from './Article'
import articles from  '../fixtures'

function App() {
    return (
        <div>
            <h1>App Name</h1>
            <Article article={articles[0]}/> 
        </div>//article={articles[0]} - передача первого ключа из массива
    )
}

export default App; //экспорт, чтобы компоненты были видны в других файлах