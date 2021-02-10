


function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="title" href="index.html">E-Tech</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sing In</a>
            </div>
        </header>
        <main>
            <div className="row center">
                <div className="card">
                    <a href="product.html"><img className="medium" src="./img/p1.jpg" alt="Computer"></img></a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Laptop</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">$360</div>
                    </div>
                </div>
                <div className="card">
                    <a href="product.html"><img className="medium" src="./img/p3.jpg" alt="phone"></img></a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Phone</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">$360</div>
                    </div>
                </div>
                <div className="card">
                    <a href="product.html"><img className="medium" src="./img/p4.jpg" alt="oculus"></img></a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Oculus</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">$360</div>
                    </div>
                </div>
                <div className="card">
                    <a href="product.html"><img className="medium" src="./img/p5.jpg" alt="CPU"></img></a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>CPU</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">$360</div>
                    </div>
                </div>
            </div>
        </main>
        <footer className="row center">
            <p>All rights reserved</p>
        </footer>
    </div>
  );
}

export default App;
