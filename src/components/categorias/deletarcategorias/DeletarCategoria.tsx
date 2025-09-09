/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
    } catch (error: any) {
      alert("Erro ao deletar a categoria.");
    }
    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto font-raleway">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-2xl">
          {categoria.nome}
        </header>
        <p className="p-8 text-3xl bg-blue-50 h-full">{categoria.descricao}</p>
        <div className="flex">
          <button
            className="text-white bg-blue-400 hover:bg-blue-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full bg-red-600 hover:bg-red-800 flex items-center justify-center py-2 text-white"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;