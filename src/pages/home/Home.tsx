import FarmaImg from '../../assets/Farmacy.svg'; // Assumindo que FarmaImg é o seu logo

function Home() {
    return (
        // Fundo em um tom mais escuro de azul (primary-dark) para dar profundidade
        <div className="bg-primary-dark flex justify-center py-16"> {/* Aumentado o padding vertical */}
            <div className='container grid grid-cols-2 items-center gap-8'> {/* Adicionado um gap entre as colunas */}
                {/* Seção de texto à esquerda */}
                <div className="flex flex-col gap-4 justify-center items-center text-center">
                    <h2 className='text-5xl font-semibold text-primary-light'> {/* Título em azul claro */}
                        Luminaire
                    </h2>
                    <p className='text-xl text-primary-ex-light'> {/* Parágrafo em azul mais claro */}
                        Sua saúde em primeiro lugar!
                    </p>
                </div>

                {/* Seção da imagem à direita, centralizada */}
                <div className="flex justify-center items-center"> {/* Centralizado vertical e horizontalmente */}
                    <img
                        src={FarmaImg}
                        alt="Logo da Luminaire Farmácia"
                        className='w-full max-w-md' // Ajuste o tamanho máximo se necessário
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;