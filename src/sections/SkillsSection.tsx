import PlaceholderBlock from '../components/PlaceholderBlock';

export default function SkillsSection() {
  return (
    <section className="section" aria-labelledby="competences-title">
      <p className="section__eyebrow">Compétences</p>
      <h2 className="section__title" id="competences-title">
        Un savoir-faire à préciser.
      </h2>
      <p className="section__lead">Domaines et outils à venir.</p>
      <PlaceholderBlock label="Grille de compétences à venir" />
    </section>
  );
}
