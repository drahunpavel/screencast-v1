import React, {PureComponent} from 'react'
import Article from './Article'
import './ArticleList.css'

export default class ArticleList extends PureComponent {


//выносим состояние статей, нач состояние - все закрыты
state = {
    openArticalId: null
}


    render() {
        {//в пропсах приходит массив статей articles

            //превращаем каждый объект articles в реактовский элемент
            //defaultOpen = {index===0} - все статьи закрыты кроме 1ой!
            const articleElements = this.props.articles.map((article, index) =>
                <li className="article-list_li" key={article.id} >
                    <Article article={article} 
                    
                    isOpen={this.state.openArticalId===article.id} 
                    onButtonCLick={/*cullback*/ this.handClick.bind(this,article.id)}
                    />
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



    handClick = openArticalId => this.setState({
        openArticalId: this.state.openArticalId === openArticalId? null:openArticalId
    })

} 
