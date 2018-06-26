import React, {Component, PureComponent} from 'react'

class Article extends PureComponent { //наследуем Article из Component
    
    //доюавление состояния
    constructor(props){
        super(props)

//defaultOpen будем передавать в статью
        this.state={
            //isOpen:props.defaultOpen,
            count:0
        }

    // this.handClick=handClick.bind(this)

     }
 
//  state={ //это аналог записиь через Constructor
//      isOpen:true
//  }


// shouldComponentUpdate(nextProps,nextState){
//     return this.state.isOpen !==nextState.isOpen //проверяет на измение кнопки isOpen
// }
//Есть PureComponent, поэтому shouldComponentUpdate не нужно реализовывать вручную. А он уже првоеряет все nextProps,nextState 


//компонент жизненого цикла
componentWillMount(){
    console.log('---','mounting')
}

//после выноса isOpen к родителю ArticleList, данный кусок больше не нужен
// componentWillReceiveProps(nextProps){
//     console.log('---','componentWillReceiveProps')
//     if (nextProps.defaultOpen != this.props.defaultOpen) this.setState({
//         isOpen: nextProps.defaultOpen
//     })
// }

componentWillUpdate(nextProps){
    console.log('---','componentWillUpdate')

}
    render() {
//все isOpen теперь в пропсах
        const {article, isOpen, onButtonCLick} = this.props;
    //console.log("---", this.props);
    //console.log("---", article);

        //this.state.isOpen && - проверка на начальное состояние isOpen и article.text
    const body = isOpen && <section className="card-text">{article.text}</section>;//целая константа с объектом {article.text}
    
    return (//style={{width:'50%'}} - инлайновый стиль
        <div className="card mx-auto" style={{width:'50%'}}>
            <div className="card-header">
                <h2 onClick={this.incrementCounter /*Добавляем кликер*/}>
                    {article.title}
                    click {this.state.count /*отображение колва кликов*/}
                    {/* <button onClick={handClick.bind(this)}>close</button> - это одна из возможностей проверять состояние кнопки */}
                    <button className="btn btn-primary btn-lg float-right" onClick={onButtonCLick}>
                        {isOpen? "close":"open"}
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
incrementCounter =() => {
    this.setState({
        count: this.state.count +1
    })
}


// handClick= () => {
//     //console.log("---","close:open");
//     this.setState({
//         isOpen: !this.state.isOpen //setState - это асинхронная апперация 
//     })
// }

}







export default Article; //экспорт, чтобы компоненты были видны в других файлах