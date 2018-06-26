import React, {Component, PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from  '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


//класс Component добавляет состояния функции
//добавляем возможность изменять расположение статей
class App extends PureComponent {
    state ={
        reverted: false //Начальное состояние
    }


    render() {
        const articleList = this.state.reverted? articles.reverse(): articles
        //console.log('---',2, this.state, articles.map(article => article.id))
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App Name
                        <button className="btn" onClick ={this.revert}>Revert</button>
                    </h1>
                </div>    
                <ArticleList articles={this.state.reverted ? articles.slice().reverse : articles}/> 
            </div>//article={articles[0]} - передача первого ключа из массива
            //если this.state.reverted? articles.reverse() или же просто статьи
        )
    }

    revert =() => {
    //console.log('---',1),
    this.articles.reverse()
    this.setState({
        
        reverted: !this.state.reverted
    
    })
}
}

export default App; //экспорт, чтобы компоненты были видны в других файлах