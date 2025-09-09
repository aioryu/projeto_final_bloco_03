import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border border-blue-400 flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-blue-600 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl text-blue-950 bg-blue-50 h-full'>{categoria.descricao}</p>
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full bg-blue-400 text-white hover:bg-blue-500 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-white bg-red-600 hover:bg-red-800 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias