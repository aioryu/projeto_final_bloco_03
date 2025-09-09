import FarmaImg from '../../assets/Farmacy.svg'

function Home() {
    return (
        <div className="bg-blue-600 flex justify-center text-white font-thin text-shadow-lg">
            <div className='container grid grid-cols-2'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-semibold'>
                        Farmamel
                    </h2>
                    <p className='text-xl'>
                        Sua saúde em primeiro lugar!
                    </p>
                </div>

                <div className="flex justify-center ">
                    <img
                        src={FarmaImg}
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home