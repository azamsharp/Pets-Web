
import './CarouselComponent.css'

function CarouselComponent(props) {

    const carouselItems = props.payload.items.map((item, index) => {
        return <img src = {item.imageUrl} className = 'carousel-item' key = {index} />
    }) 

    console.log(carouselItems)

    return (
        <div className = 'carousel'> 
            {carouselItems}
        </div>
       
    )
}

export default CarouselComponent 