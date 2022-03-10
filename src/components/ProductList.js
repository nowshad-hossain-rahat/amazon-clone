import Product from "./Product";

function ProductList(){

    return (
        <>

            <div className="home-row">
                <Product />
                <Product />
            </div>

            <div className="home-row">
                <Product />
                <Product />
                <Product />
            </div>
            
            <div className="home-row">
                {/* Product 1 */}
                {/* Product 2 */}
            </div>

        </>
    );

}

export default ProductList;