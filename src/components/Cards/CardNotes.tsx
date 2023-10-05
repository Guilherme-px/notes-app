import { useState } from 'react';
import star from '../../assets/star.svg';
import goldStar from '../../assets/goldStar.svg';
import editIcon from '../../assets/editIcon.svg';
import colorPickerIcon from '../../assets/colorPickerIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import confirmIcon from '../../assets/confirmIcon.svg';
import { INotes, INotesList } from '../../types/interfaces/INotes';
import { useNotes } from '../../hooks/useNotes';

function CardNotes({ noteData, id }: { noteData: INotesList; id: string }) {
    const { updateNotes } = useNotes();
    const [note, setNote] = useState<INotes>({ ...noteData });
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateNotes(id, {
            title: note.title,
            color: note.color,
            is_favorite: note.is_favorite,
        });
        setIsEditing(false);
    };

    const handleUpdateFavorite = async () => {
        const updatedData = {
            title: note.title,
            color: note.color,
            is_favorite: !note.is_favorite,
        };

        await setNote((prevNote) => ({
            ...prevNote,
            ...updatedData,
        }));

        if (id) {
            updateNotes(id, updatedData);
        }
    };

    return (
        <div className="max-w-md bg-white rounded-[25px] shadow-md">
            <div className="border-b-2 flex items-center justify-between">
                {isEditing ? (
                    <input
                        type="text"
                        className="w-full text-sm placeholder-text-card-title text-card-text px-6 py-3 border-0 focus:outline-none rounded-[25px]"
                        value={note.title}
                        onChange={(e) =>
                            setNote({ ...note, title: e.target.value })
                        }
                    />
                ) : (
                    <span className="w-full text-sm text-card-text px-6 py-3">
                        {note.title}
                    </span>
                )}
                <button className="p-2" onClick={handleUpdateFavorite}>
                    {note.is_favorite ? (
                        <img
                            src={goldStar}
                            alt="Icone de estrela"
                            className="w-[19.353px] h-[18.385px]"
                        />
                    ) : (
                        <img
                            src={star}
                            alt="Icone de estrela"
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
                <div className="px-6 pb-3 pt-5 rounded-[25px] flex justify-between items-center">
                    <div className="flex gap-3">
                        {isEditing ? (
                            <div>
                                <button
                                    className="p-2 mr-2"
                                    onClick={handleSave}
                                >
                                    <img
                                        src={confirmIcon}
                                        alt="Icone para salvar"
                                    />
                                </button>
                                <button onClick={() => setIsEditing(false)}>
                                    <img
                                        src={deleteIcon}
                                        alt="Icone para cancelar"
                                    />
                                </button>
                            </div>
                        ) : (
                            <button className="p-2" onClick={handleEdit}>
                                <img src={editIcon} alt="Icone para editar" />
                            </button>
                        )}
                        <button onClick={() => alert('selecionar cor')}>
                            <img
                                src={colorPickerIcon}
                                alt="Icone para selecionar cor"
                            />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => alert('deletar')}>
                            <img src={deleteIcon} alt="Icone para deletar" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardNotes;
