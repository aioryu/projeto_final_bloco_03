/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscarCategorias } from "../../../services/Service";
import { deletarCategoria as deletarCategoriaService } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  useEffect(() => {
    async function carregarCategoria() {
      if (id) {
        await buscarCategorias(`/categoria/${id}`, setCategoria);
      }
    }
    carregarCategoria();
  }, [id]);

  async function deletarCategoria() {
  try {
    if (id) { 
      await deletarCategoriaService(Number(id)); 
      alert("Categoria apagada com sucesso!");
      navigate("/categorias");
    }
  } catch (error: any) {
    alert("Erro ao deletar a categoria.");
  }
}
  

  return (
    <div className="container w-1/3 mx-auto font-raleway">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <p className="p-8 text-3xl bg-blue-50 h-full">{categoria.descricao}</p>

      <div className="flex">
        <button
          className="text-white bg-blue-400 hover:bg-blue-600 w-full py-2"
          onClick={() => navigate("/categorias")}
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
  );
}

export default DeletarCategoria;