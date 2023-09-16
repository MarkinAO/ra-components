import { Component } from "react";

export default class ProductClass extends Component {    
    render() {
        const { item } = this.props;        
        return (
            <>
                <h2 className="task-title">Ниже классовый компонент</h2>
                <div className="item-container">        
                    <this.renderProductImg src={ item.imgSrc } />
                    <div className="item-content">
                        <this.renderDataProduct data={ item } />
                    </div>        
                </div>
            </>            
        )
    }

    renderDataProduct(item) {
        const { data } = item
        console.log(data)
        return (            
            <div className="main-content">
                <h2>{ data.brand }</h2>
                <h1>{ data.title }</h1>
                <h3>{ data.description }</h3>
                <div className="description">{ data.descriptionFull }</div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <div className="purchase-info">
                <div className="price">{ data.currency }{ data.price }</div>
                <button className="button">Добавить в корзину</button>
                </div>
            </div>
        )
    }

    renderProductImg(item) {
        const { src } = item
        return (
            <>
                <div className="img-container">
                    <img src={ src } className="img" alt="Изображение не загружено"/>
                </div>    
            </>
        )
    }
}