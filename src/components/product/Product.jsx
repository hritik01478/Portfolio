import './product.css';
import me from '../../images/me.jpeg';

const Product = ({ key, img, link }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={me} alt="" className="p-img" />
            </a>
        </div>
    );
}

export default Product;
