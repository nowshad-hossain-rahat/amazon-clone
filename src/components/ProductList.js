import Product from "./Product";

function ProductList(){

    return (
        <>

            <div className="home-row">
                <Product 
                    id={1}
                    title={'Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches, Multimedia Control for PC and Desktop Computer, with Removable Hand Rest'}
                    price={59.99}
                    rating={5} 
                    image={'keyboard.jpg'}
                />
                <Product 
                    id={2}
                    title={'LG OLED C1 Series 65” Alexa Built-in 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode (OLED65C1PUB, 2021)'}
                    price={159.49}
                    rating={4} 
                    image={'tv.jpg'}
                />
            </div>

            <div className="home-row">
                <Product 
                    id={3} 
                    title={'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac'} 
                    price={27.99} 
                    image={'mouse.jpg'} 
                    rating={4}
                />
                <Product 
                    id={4} 
                    title={'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)'} 
                    price={59.99} 
                    image={'hdd.jpg'} 
                    rating={5}
                />
                <Product 
                    id={5} 
                    title={'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)'} 
                    price={59.99} 
                    image={'hdd.jpg'} 
                    rating={4}
                />
            </div>
            
            <div className="home-row">
                <Product 
                    id={6} 
                    title={'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)'} 
                    price={59.99} 
                    image={'hdd.jpg'} 
                    rating={4}
                />
            </div>

        </>
    );

}

export default ProductList;