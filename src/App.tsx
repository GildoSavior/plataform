import { gql, useQuery } from "@apollo/client";

const GET_QUERY_lESSONS = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface ILesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons :ILesson[]}>(GET_QUERY_lESSONS);
  return (
    <div className="App">
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
