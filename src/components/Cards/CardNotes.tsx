import { useRef, useState } from 'react';
import star from '../../assets/star.svg';
import goldStar from '../../assets/goldStar.svg';
import editIcon from '../../assets/editIcon.svg';
import colorPickerIcon from '../../assets/colorPickerIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import confirmIcon from '../../assets/confirmIcon.svg';
import { INotes, INotesList } from '../../types/interfaces/INotes';
import { useNotes } from '../../hooks/useNotes';
import ColorsModal from '../Modal/ColorsModal';

function CardNotes({ noteData, id }: { noteData: INotesList; id: string }) {
    const { updateNotes, deleteNotes } = useNotes();
    const [note, setNote] = useState<INotes>({ ...noteData });
    const [isEditing, setIsEditing] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);
    const [colorModalPosition, setColorModalPosition] = useState<{
        top: number;
        left: number;
    }>({ top: 0, left: 0 });
    const colorModalButtonRef = useRef<HTMLButtonElement>(null);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
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

    const handleOpenColorModal = () => {
        const buttonRect = colorModalButtonRef.current?.getBoundingClientRect();

        if (buttonRect) {
            setColorModalPosition({
                top: buttonRect.bottom,
                left: buttonRect.left,
            });
            setIsColorModalOpen(!isColorModalOpen);
        }
    };

    const handleDelete = async () => {
        await deleteNotes(id);
    };

    return (
        <>
            <div
                className="max-w-md rounded-[25px] shadow-md"
                style={
                    note.color
                        ? { background: note.color }
                        : { background: 'white' }
                }
            >
                <div className="border-b-2 flex items-center justify-between">
                    {isEditing ? (
                        <input
                            type="text"
                            className="w-full text-sm placeholder-text-card-title text-card-text px-6 py-3 border-0 focus:outline-none rounded-[25px]"
                            style={
                                note.color
                                    ? { background: note.color }
                                    : { background: 'white' }
                            }
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
                            Clique ou arraste o arquivo para esta área para
                            fazer upload
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
                                    <img
                                        src={editIcon}
                                        alt="Icone para editar"
                                    />
                                </button>
                            )}
                            <button
                                ref={colorModalButtonRef}
                                onClick={handleOpenColorModal}
                            >
                                <img
                                    src={colorPickerIcon}
                                    alt="Icone para selecionar cor"
                                />
                            </button>
                        </div>
                        <div>
                            <button onClick={handleDelete}>
                                <img
                                    src={deleteIcon}
                                    alt="Icone para deletar"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ColorsModal
                isOpen={isColorModalOpen}
                onSelectColor={(selectedColor) => {
                    setNote({ ...note, color: selectedColor });
                    setIsColorModalOpen(false);
                }}
                buttonPosition={colorModalPosition}
                noteData={note}
                id={id}
            />
        </>
    );
}

export default CardNotes;
