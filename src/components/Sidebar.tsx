import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const LESSONS = gql`
  query {
    lessons{
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface IGetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: "live" | "class";
    availableAt: string;
    title: string;
    slug: string;
  }[];
}

export function Sidebar() {

  const { data } = useQuery<IGetLessonsQueryResponse>(LESSONS);

  console.log(data)

  return (
    <aside className="w-[330px] bg-gray-700 border-l p-6 border-gray-600">
      <span className=" font-bold text-2xl text-center pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(l => {
          return (
            <Lesson
              key={l.id}
              title={l.title}
              slug={l.slug}
              availableAt={new Date(l.availableAt)}
              type={l.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
