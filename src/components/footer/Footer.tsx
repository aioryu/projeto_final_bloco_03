import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <div className="bg-blue-600 text-white py-4 flex justify-center items-center">
            <div className="container flex flex-col items-center">
                <p className='text-xl font-bold'>
                    Projeto Farmacia | Copyright: {data}
                </p>
                <p className='text-lg mt-2 mb-2'>Acesse minhas redes sociais</p>
                <div className='flex gap-4'>
                    <a href="https://www.linkedin.com/in/vitor-nazareth/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogoIcon size={48} weight='bold' />
                    </a>
                    <a href="https://www.instagram.com/vitorzath?igsh=MTFoYnl3ZjcyMmFoMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon size={48} weight='bold' />
                    </a>
                    <a href="https://github.com/aioryu" target="_blank" rel="noopener noreferrer">
                        <GithubLogoIcon size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;