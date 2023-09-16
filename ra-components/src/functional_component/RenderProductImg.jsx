function RenderProductImg({src}) {
    return (
        <>
            <div className="img-container">
                <img src={src} className="img" alt="Изображение не загружено"/>
            </div>    
        </>
    )
}

export default RenderProductImg;