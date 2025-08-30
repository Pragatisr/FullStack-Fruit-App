// Footer.js
const Footer = () => {
  return (
    <footer
      className="text-white py-3 bg-success"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height:"5%"
      }}
    >
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Fresh Fruits Store !!!!</p>
      </div>
    </footer>
  );
};

export default Footer;
