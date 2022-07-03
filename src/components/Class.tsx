import { CheckCircle, Lock } from "phosphor-react";
import { IClass } from "../types";
import { isPast } from "date-fns";
import { format } from "date-fns/esm";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Link, useParams } from "react-router-dom";

export function Class(props: IClass) {
  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  const isClassAvailable = isPast(props.availableAt);
  const availableDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormated}</span>
      <div
        className={`className="rounded border border-gray-300 p-4 mt-2 group-hover:border-green-500" 
        ${isActiveLesson && "bg-green-500"} 
        ${isActiveLesson && "border-green-500"}
        `}
      >
        <header className="flex items-center justify-between">
          {isClassAvailable ? (
            <span
              className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${
                isActiveLesson && "text-white"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={` mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
