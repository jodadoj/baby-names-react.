interface NamedPlaceProps {
  title: string;
  name: string;
  country: string;
  img: string;
  imgAlt: string;
  url: string;
  details: string;
}

function NamedPlace(props: NamedPlaceProps): JSX.Element {
  return (
    <div className="NamedPlace">
        <h2>{props.title}</h2>
        <h3>{props.name}</h3>
        <h3>{props.country}</h3>
        <a href={props.url}>
            <img src={props.img} alt={props.imgAlt} width="720" height="600"></img>
        </a>
        <p>{props.details} Click the image for a closer look!</p>
    </div>
  );
}

export default NamedPlace;