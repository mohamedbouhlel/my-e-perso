import PlaceholderBlock from '../components/PlaceholderBlock';

export default function ContactSection() {
  return (
    <section className="section" aria-labelledby="contact-title">
      <p className="section__eyebrow">Contact</p>
      <h2 className="section__title" id="contact-title">
        Un échange à ouvrir.
      </h2>
      <p className="section__lead">Coordonnées à venir.</p>
      <PlaceholderBlock label="Moyens de contact à venir" />
    </section>
  );
}
