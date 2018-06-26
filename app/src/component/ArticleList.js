import React, {PureComponent} from 'react'
import Article from './Article'
import './ArticleList.css'

export default class ArticleList extends PureComponent {
    render() {
        {//в пропсах приходит массив статей articles

            //превращаем каждый объект articles в реактовский элемент
            //defaultOpen = {index===0} - все статьи закрыты кроме 1ой!
            const articleElements = this.props.articles.map((article, index) =>
                <li className="article-list_li" key={article.id}>
                    <Article article={article} defaultOpen={index === 0} />
                </li>
            )

            return (

                <ul>
                    {/* <li><Article article={articles[0]}/></li>
                <li><Article article={articles[1]}/></li>
                <li><Article article={articles[2]}/></li> */}
                    {articleElements}
                </ul>
            )
        }
    }
} 
