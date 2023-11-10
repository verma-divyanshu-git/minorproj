import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer class="container py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="/profile" class="nav-link px-2 text-muted">
              Profile
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
