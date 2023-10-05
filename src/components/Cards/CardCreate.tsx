import { ChangeEvent, useState } from 'react';
import star from '../../assets/star.svg';
import goldStar from '../../assets/goldStar.svg';
import { useNotes } from '../../hooks/useNotes';

function CreateCard() {
    const { createNote } = useNotes();
    const [note, setNote] = useState({
        title: '',
        color: '',
        is_favorite: false,
    });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNote({
            ...note,
            title: e.target.value,
        });
    };

    const handleSubmit = async () => {
        await createNote(note);
        setNote({
            ...note,
            title: '',
        });
    };

    return (
        <div className="px-8 pt-[25px]">
            <div className="max-w-md mx-auto bg-white  rounded-[25px] sm:rounded-[3px] shadow-md">
                <div className="border-b-2 flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Título"
                        className="w-full text-sm placeholder-text-card-title text-card-text px-6 py-3 border-0 focus:outline-none rounded-[25px] sm:rounded-[3px]"
                        value={note.title}
                        onChange={handleOnChange}
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
                    <button
                        onClick={handleSubmit}
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
