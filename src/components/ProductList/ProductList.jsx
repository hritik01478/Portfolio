import './productList.css';
import Product from '../product/Product.jsx';
import { products } from '../../data';

const productList = () => {
    return (
        <div className="pl" id='projects'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Hritik Portfolio</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quas incidunt recusandae  pariatur expedita nisi. Iure aspernatur aliquam provident magnam maiores dolore impedit illo perspiciatis.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => <Product key={item.id} imgicon={item.imgicon} link={item.link} />)}
            </div>
        </div>
    );
}

export default productList;