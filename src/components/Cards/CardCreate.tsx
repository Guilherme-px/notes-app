import star from '../../assets/star.svg';

function CreateCard() {
    return (
        <div className="px-8 pt-[25px]">
            <div className="max-w-md mx-auto bg-white  rounded-[25px] sm:rounded-[3px] shadow-md">
                <div className="border-b-2 flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Título"
                        className="w-full text-sm placeholder-text-card-title text-card-text px-6 py-3 border-0 focus:outline-none rounded-[25px] sm:rounded-[3px]"
                    />
                    <button
                        className="p-2"
                        onClick={() => alert('Botão clicado')}
                    >
                        <img
                            src={star}
                            alt="Botão de estrela"
                            className="w-[19.353px] h-[18.385px]"
                        />
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => alert('Botão clicado')}
                        className="w-full text-left text-sm text-card-text placeholder-text-card-text px-6 pb-8 pt-5 border-gray-300 focus:outline-none resize-none border-0 rounded-[25px] sm:rounded-[3px]"
                    >
                        Criar nota...
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateCard;
