/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { 
    buscarCategoriaPorId, 
    cadastrarCategoria, 
    atualizarCategoria 
} from "../../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(Number(id), setCategoria);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizarCategoria(categoria, setCategoria);
                alert("A categoria foi atualizada com sucesso!");
            } else {
                await cadastrarCategoria(categoria, setCategoria);
                alert("A categoria foi cadastrada com sucesso!");
            }
            retornar();
        } catch (error: any) {
            alert("Erro ao salvar a categoria.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-raleway text-blue-950">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 text-blue-950" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva a Categoria"
                        name="descricao"
                        className="border-2 border-blue-700 rounded p-2"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`rounded text-white w-1/2 py-2 mx-auto flex justify-center ${
                        isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-800"
                    }`}
                >
                    {isLoading ? "Salvando..." : id === undefined ? "Cadastrar" : "Atualizar"}
                </button>
            </form>
        </div>

    );
}

export default FormCategoria;