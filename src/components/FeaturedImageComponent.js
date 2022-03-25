
import './FeaturedImageComponent.css'

function FeaturedImageComponent(props) {
    return (
        <div>
            <img className = "image" src = {props.payload.imageUrl} />
        </div>
       
    )
}

export default FeaturedImageComponent