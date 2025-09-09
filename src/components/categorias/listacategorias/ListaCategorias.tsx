import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscarCategorias } from "../../../services/Service";
// Adjust the import path as needed

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function carregarCategorias() {
        await buscarCategorias('/categoria', setCategorias)
    }

    useEffect(() => {
        carregarCategorias()
    }, [])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;