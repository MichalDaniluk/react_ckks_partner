import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <div>
      <SectionHeader title="Kontakt" />
      <h2>Kontakt z CKKS</h2>
      <p>
        <strong>Obsługa Klientów i Kursów</strong>
        <br />
        Email:<a href="mailto:sekretariat@ckks.pl">sekretariat@ckks.pl</a>
        <br />
        71 307 12 11, 733 330 303
        <br />
        <br />
        <strong>Zaświadczenia i Marketing</strong>
        <br />
        Email: <a href="mailto:zaswiadczenia@ckks.pl">
          zaswiadczenia@ckks.pl
        </a>, <a href="mailto:marketing@ckks.pl">marketing@ckks.pl</a>
        <br />
        tel. 83 307 01 70
      </p>
    </div>
  );
};

export default Contact;
