import PlaceholderBlock from '../components/PlaceholderBlock';

export default function HomeSection() {
  return (
    <section className="section" aria-labelledby="accueil-title">
      <p className="section__eyebrow">Accueil</p>
      <h1 className="section__title section__title--hero" id="accueil-title">
        Un espace personnel, simple et vivant.
      </h1>
      <p className="section__lead">Présentation synthétique à venir.</p>
      <PlaceholderBlock label="Mise en avant à venir" />
    </section>
  );
}
