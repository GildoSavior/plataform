import { useMutation, gql } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_SUBCRIBE = gql`
  mutation CreateSubcriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBCRIBE);
  const navigate = useNavigate();

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    createSubscriber({
      variables: {
        name,
        email,
      },
    });
    loading === true ? navigate("/event") : console.log("wew");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex items-center">
            <h1 className="text-5xl">PlatForm| </h1>
            <h1 className="text-4xl text-cyan-800">ReactJS</h1>
          </div>
          <h1 className="mt-8 text-[2.4rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-200">aplicacao completa</strong> do
            zero com <strong className="text-blue-200">React</strong>
          </h1>
          <p className="mt-4 text-[1.2rem] text-gray-200 leading-relaxed">
            Em apenas uma semana de pratica voce vai dominar uma das tech mas
            utilizadas e com alta demanda para acessar as melhores oportunidades
            do mercado
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <p className="text-2xl mb-4">Inscreva-se gratuitamente</p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Seu email"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir Vaga
            </button>
          </form>
        </div>
      </div>

      <img src="./src/assets/code-mockup.png" className="mt-3" alt="" />
    </div>
  );
}
