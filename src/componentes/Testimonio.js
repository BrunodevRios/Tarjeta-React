import React from "react";
import "./Testimonio.css";

export const testimonios = [
  {
    id: 0,
    imagen: require("../imagenes/pjCuatro.png"),
    nombre: "Liu Chen en Shanghai, China",
    profesion: "Ingeniero de software",
    testimonio:
      "Trabajo como ingeniero de software en Shanghai, una ciudad increíblemente emocionante y en constante evolución. La tecnología es una parte importante de la cultura aquí, y estoy orgulloso de contribuir al desarrollo de nuevas soluciones y productos que mejoran la vida de las personas.",
  },
  {
    id: 1,
    imagen: require("../imagenes/pjCinco.png"),
    nombre: "Sofía García en Madrid, España",
    profesion: "Chef y propietaria de un restaurante",
    testimonio:
      "Soy chef y propietaria de un restaurante en Madrid, España. La cultura de la comida aquí es muy importante, y me encanta ser parte de ella. Mi objetivo es crear platos únicos y sabrosos que reflejen la cultura y la tradición culinaria de España. Me enorgullece ver a la gente disfrutando de mi comida y creando recuerdos en mi restaurante.",
  },
  {
    id: 2,
    imagen: require("../imagenes/pjSeis.png"),
    nombre: "Hassan Abdullah en Kuala Lumpur, Malasia",
    profesion: "Ingeniero de petróleo y gas",
    testimonio:
      "Trabajo como ingeniero de petróleo y gas en Kuala Lumpur, Malasia. Esta ciudad es una de las más vibrantes y cosmopolitas de Asia, y la industria del petróleo y gas es un importante motor económico aquí. Me enorgullece formar parte de una industria que es crucial para el crecimiento económico y la estabilidad de mi país.",
  },
];
export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="imageSize">
        <img className="imagen-testimonio" src={props.imagen} />
      </div>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio">{props.profesion}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
