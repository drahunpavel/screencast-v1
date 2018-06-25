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
    const body = this.state.isOpen && <section>{article.text}</section>;//целая константа с объектом {article.text}
    
    return (
        <div className="helo" style={{color:'blue'}}>
            <h1>
                {article.title}
                {/* <button onClick={handClick.bind(this)}>close</button> - это одна из возможностей проверять состояние кнопки */}
                <button onClick={this.handClick}>
                    {this.state.isOpen? "close":"open"}
                </button>
            </h1>
            {body// const body
            }
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
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