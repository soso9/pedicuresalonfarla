import React from 'react';

export const services = [
  {
    title: "Pedicure Basis All-in",
    text: "De basisbehandeling is een verwennerij voor beide voeten. De aandacht gaat naar het vinden van klachten zodat uw voeten gezond en wel de salon verlaten. Na afloop genieten uw voeten van een wel verdiende massage.",
    image: "http://pedicuresalonfarla.nl/wp-content/uploads/2015/12/voeten-plaatje-1.jpg?5be512"
  },
  {
    title: "Pedicure deluxe",
    text: "Naast een BASIS ALL-IN behandeling geniet u van alle extra’s die mijn salon te bieden heeft. Wat deze behandeling zo luxe maakt is de paraffine als afsluiting.",
    image: "http://pedicuresalonfarla.nl/wp-content/uploads/2015/12/tea-tree-bladeren.jpg?5be512"
  },
  {
    title: "Pedicure la couleur",
    text: "Na het genieten van een BASIS ALL-IN behandeling kiest u een prachtige kleur uit voor uw nagels. Deze wordt toegepast met een soak-off nagellak product. Door deze werkwijze kunt u na behandeling direct  uw schoenen aan want de nagels zijn helemaal uit gehard!",
    image: "http://pedicuresalonfarla.nl/wp-content/uploads/2015/09/laushine-gel-lak.jpg?5be512"
  },
  {
    title: "Gel nail repair",
    text: `Een gescheurde nagel, getraumatiseerde nagel of te ver weg geknipte  nagelhoeken die kunnen gaan ingroeien?
Deze nagels kunnen gerepareerd worden! Met een gel die speciaal ontwikkeld is voor de teennagel. Het is een soepele gel die meegaat met de beweging van de voet.`,
    image: "http://pedicuresalonfarla.nl/wp-content/uploads/2015/12/gel-repair-voor-en-na.jpeg?5be512"
  },
  {
    title: "Body Sugaring",
    text: "Vele eeuwen geleden ontdekten vrouwen een efficiënte en pijnloze techniek voor ontharen met vrij simpele middelen. Tegenwoordig is de methode verder ontwikkeld zodat het voldoet aan onze moderne eisen.",
    image: "http://pedicuresalonfarla.nl/wp-content/uploads/2015/12/sugar-foto-1.jpg?5be512"
  }
];

export const ServiceGrid = ({services}) =>
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      {
        services.map((service) => <ServiceGridItem service={service} key={service.title}/>)
      }
    </div>
  </div>

export const ServiceGridItem = ({service}) =>
  <div className="mdc-layout-grid__cell">
    <Service service={service} />
  </div>

export const Service = ({service}) => (
    <div className="mdc-card">
      <section className="mdc-card__media" style={ {background: `url(${service.image}) center center no-repeat`} }></section>
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">{service.title}</h1>
      </section>
      <section className="mdc-card__supporting-text">
        {service.text}
      </section>
      <section className="mdc-card__actions">
        <a className="mdc-button mdc-button--compact mdc-card__action">Lees meer</a>
      </section>
    </div>
)
