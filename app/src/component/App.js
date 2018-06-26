import React from 'react'
import ArticleList from './ArticleList'
import articles from  '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">App Name</h1>
            </div>    
            <ArticleList articles={articles}/> 
        </div>//article={articles[0]} - передача первого ключа из массива
    )
}

export default App; //экспорт, чтобы компоненты были видны в других файлах