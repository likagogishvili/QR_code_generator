import "./footer.scss";
import * as icons from "../assets/footerImg/footer";
export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="/https://www.facebook.com/geostat.ge/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.fb})` }}
          ></i>
        </a>
        <a href="/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.github})` }}
          ></i>
        </a>
        <a href="/https://twitter.com/Geostat100">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.twitter})` }}
          ></i>
        </a>
        <a href="/https://www.linkedin.com/company/national-statistics-office-of-georgia/mycompany/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.linkedIn})` }}
          ></i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/">
            მთავარი გვერდი
          </a>
        </p>
        <p>2023, საქსტატის ოფიციალური ვებგვერდი</p>
      </div>
    </footer>
  );
}
