import RenderProductImg from "./RenderProductImg"
import RenderProductData from "./RenderProductData"

function Profuct({item}) {
    return (
        <>
            <h2 className="task-title">Ниже функциональный компонент</h2>
            <div className="item-container">        
                <RenderProductImg src={item.imgSrc} />
                <div className="item-content">
                    <RenderProductData data={item} />
                </div>        
            </div>
        </>        
    )
}

export default Profuct