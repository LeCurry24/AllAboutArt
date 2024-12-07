import styles from "./GalleryPage.module.css";
// import GallerySelect from "./GallerySelect";

const Gellery = () => {
  return (
    <>
      <div className={styles.mensCard}>
        <div className={styles.gallerySelect}>
        {/* <GallerySelect/> */}
        <b className={styles.gallery}><u>Gallery</u></b>
        </div>
        <hr />
        <div></div>
      </div>
    </>
  );
};

export default Gellery;