import PlaceholderBlock from '../components/PlaceholderBlock';

export default function ProjectsSection() {
  return (
    <section className="section" aria-labelledby="projets-title">
      <p className="section__eyebrow">Projets</p>
      <h2 className="section__title" id="projets-title">
        Des projets à documenter.
      </h2>
      <p className="section__lead">Sélection de réalisations à venir.</p>
      <PlaceholderBlock label="Liste des projets à venir" />
    </section>
  );
}
