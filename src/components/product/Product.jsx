import './product.css';
// import me from '../../images/foodOrderingwebsite.png';

const Product = ({ imgicon, link }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle" style={{ backgroundColor: "red" }}></div>
                <div className="p-circle" style={{ backgroundColor: "rgb(249, 218, 106)" }}></div>
                <div className="p-circle" style={{ backgroundColor: "rgb(122, 204, 0)" }}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={imgicon} alt="" className="p-img" />
            </a>
        </div>
    );
}

export default Product;
