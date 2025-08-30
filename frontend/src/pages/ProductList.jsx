import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { useProducts } from "../context/ProductContext";
const ProductList = () => {
    const { products } = useProducts();

    return (
        <div>
            <Header />
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {products.map((card) => (
                    <Cards key={card.key} card={card} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default ProductList;
