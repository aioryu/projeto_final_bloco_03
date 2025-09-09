import { Link } from "react-router-dom";
import FarmaLogo from '../../assets/FarmaLOGO.png'




function Navbar() {
  return (
    <div className='h-20 flex justify-center py-4 bg-blue-600 text-white'>
      <div className="container flex justify-between items-center text-lg">
        <Link to='/home' className="w-40">
          <img src={FarmaLogo} alt="Luminaire Farmácia Logo" />
        </Link>

        <div className='flex gap-4'>
          <Link to='/categorias' className='hover:underline text-white'>Categorias</Link>
          <Link to='/cadastrarcategoria' className='hover:underline text-white'>Cadastrar Categorias</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;