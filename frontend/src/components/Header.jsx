function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-5">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-light">🌱 FreshFruits</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/products"
                >
                  Product List
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="/cart">
                  <i className="bi bi-cart" /> My Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/signup">
                  <i className="bi bi-person" /> Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/login">
                  <i className="bi bi-box-arrow-in-right" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  );
}

export default Header;