import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.css"

const Layout = () => {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.homeProfileGallery}>
          <Link to="/">
            <button className={styles.layoutButtons}><b>Home</b></button>
          </Link>
          <Link to="/profile">
            <button className={styles.layoutButtons}><b>Profile</b></button>
          </Link>
          <Link to="/gallery">
            <button className={styles.layoutButtons}><b>Gallery</b></button>
          </Link>
          <Link to="/about">
            <button className={styles.layoutButtons}><b>About</b></button>
          </Link>
        </div>
        <div className={styles.signs}>
          <Link to="/sign-in">
            <button className={styles.layoutButtons}><b>Sign In</b></button>
          </Link>
          <button className={styles.layoutButtons}><b>Sign Out</b></button>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;