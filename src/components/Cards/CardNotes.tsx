import { useState } from 'react';
import star from '../../assets/star.svg';
import goldStar from '../../assets/goldStar.svg';
import editIcon from '../../assets/editIcon.svg';
import colorPickerIcon from '../../assets/colorPickerIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import { INotes } from '../../types/interfaces/INotes';

function CardNotes() {
    const [note, setNote] = useState<INotes>({
        title: '',
        color: '',
        is_favorite: false,
    });

    return (
        <div className="max-w-md bg-white rounded-[25px] shadow-md">
            <div className="border-b-2 flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Título"
                    className="w-full text-sm placeholder-text-card-title text-card-text px-6 py-3 border-0 focus:outline-none rounded-[25px]"
                />
                <button
                    className="p-2"
                    onClick={() =>
                        setNote({ ...note, is_favorite: !note.is_favorite })
                    }
                >
                    {note.is_favorite ? (
                        <img
                            src={goldStar}
                            alt="Botão de estrela"
                            className="w-[19.353px] h-[18.385px]"
                        />
                    ) : (
                        <img
                            src={star}
                            alt="Botão de estrela"
                            className="w-[19.353px] h-[18.385px]"
                        />
                    )}
                </button>
            </div>
            <div>
                <div className="px-6 pb-8 pt-5">
                    <span className="w-full text-left text-[13px] text-card-text">
                        Clique ou arraste o arquivo para esta área para fazer
                        upload
                    </span>
                </div>
            </div>
            <div>
                <div className="px-6 pb-3 pt-5 rounded-[25px] flex justify-between">
                    <div className="flex gap-3">
                        <button onClick={() => alert('editar')}>
                            <img src={editIcon} alt="Botão de estrela" />
                        </button>
                        <button onClick={() => alert('selecionar cor')}>
                            <img src={colorPickerIcon} alt="Botão de estrela" />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => alert('deletar')}>
                            <img src={deleteIcon} alt="Botão de estrela" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardNotes;
