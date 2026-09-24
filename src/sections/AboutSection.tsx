import PlaceholderBlock from '../components/PlaceholderBlock';

export default function AboutSection() {
  return (
    <section className="section" aria-labelledby="a-propos-title">
      <p className="section__eyebrow">À propos</p>
      <h2 className="section__title" id="a-propos-title">
        Un parcours à raconter.
      </h2>
      <p className="section__lead">Biographie courte à venir.</p>
      <PlaceholderBlock label="Texte de présentation à venir" />
    </section>
  );
}
