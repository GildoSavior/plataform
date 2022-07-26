import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: ILessonProps) {
  const isAvailable = isPast(props.availableAt);

  const { slug } = useParams<{ slug: string }>();

  const isActive = slug === props.slug;

  const dateFormat = format(
    props.availableAt,
    "EEEE ' - ' d ' de ' MMMM ' - ' k 'h' ':' mm 'm' ",
    {
      locale: ptBR,
    }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-200 p-1 block">{dateFormat}</span>
      <div
        className={classnames(
          "rounded border border-gray-300 p-4 group-hover:border-green-500 transition-colors",
          {
            "bg-green-600": isActive,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isAvailable ? (
            <span className="flex gap-2 text-sm text-blue-300 font-medium">
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className=" flex gap-2 text-sm text-blue-300 font-medium">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className="text-xs mx-2 rounded pt-[0.125rem] px-2 text-white border border-green-500 ">
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={classnames("text-gray-200 mt-5 block", {
            "text-white": isActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
