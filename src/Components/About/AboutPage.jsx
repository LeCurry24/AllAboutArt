import styles from "./AboutPage.module.css";

const About = () => {
  return (
    <>
    <div className={styles.aC}>
      <div className={styles.about}>
        <b className={styles.aboutRoseGala}>About Rose Gala</b>
        <hr />
        <div className={styles.aboutStatement}>
          <p className={styles.paragraph}>
            {" "}
            Welcome to AllAboutArt (AAA), your premier destination for celebrating the
            diverse world of art through photography, paintings, drawings and
            Graphic Design. Our gallery app is designed to immerse you in a rich
            tapestry of creative expression, where every piece tells its own
            unique story.
          </p>
          <p className={styles.paragraph}>
            {" "}
            At AllAboutArt, we believe that art is not only for viewing but for
            experiencing. That's why we offer features that let you actively
            engage with the artwork. Cast your vote for your favorite pieces,
            explore the top picks selected by the community, and curate your
            personal collection of favorite art. Whether you're an art
            aficionado or just discovering your artistic tastes, Rose Gala
            invites you to connect with art in a way that's both interactive and
            inspiring.
          </p>
          <p className={styles.p}>
            Join us on this creative journey and let your appreciation for art
            shine!
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;