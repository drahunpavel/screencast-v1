import React, {Component} from 'react'

class Article extends Component { //наследуем Article из Component
    
    //доюавление состояния
    // constructor(props){
    //     super(props)

    //     this.state={
    //         isOpen:false
    //     }

    // this.handClick=handClick.bind(this)

    // }
    
 state={ //это аналог записиь через Constructor
     isOpen:true
 }


    render() {

        const {article} = this.props;
    console.log("---", this.props);
    //console.log("---", article);

        //this.state.isOpen && - проверка на начальное состояние isOpen и article.text
    const body = this.state.isOpen && <section className="card-text">{article.text}</section>;//целая константа с объектом {article.text}
    
    return (//style={{width:'50%'}} - инлайновый стиль
        <div className="card mx-auto" style={{width:'50%'}}>
            <div className="card-header">
                <h2>
                    {article.title}
                    {/* <button onClick={handClick.bind(this)}>close</button> - это одна из возможностей проверять состояние кнопки */}
                    <button className="btn btn-primary btn-lg float-right" onClick={this.handClick}>
                        {this.state.isOpen? "close":"open"}
                    </button>
                </h2>
            </div>

            <div className="card-body">
                <h6 className="card-subtitle-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                {
                    body// const body
                }
            </div>
        </div>
    )
    }


// function handClick(){//кнопка закрыть
//     //меняем состояние isOpen с помощью setstate
//     console.log("---","clicked");
// }
handClick= () => {
    console.log("---","close:open");
    this.setState({
        isOpen: !this.state.isOpen //setState - это асинхронная апперация 
    })
}

}







export default Article; //экспорт, чтобы компоненты были видны в других файлах