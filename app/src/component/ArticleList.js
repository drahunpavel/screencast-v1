import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {//в пропсах приходит массив статей articles
    
    //превращаем каждый объект articles в реактовский элемент
    const articleElements = articles.map(article =>
        <li key={article.id}><Article article={article}/></li>
    )
    
    return(

        <ul>
            {/* <li><Article article={articles[0]}/></li>
            <li><Article article={articles[1]}/></li>
            <li><Article article={articles[2]}/></li> */}
            {articleElements}
        </ul>
    )
}
