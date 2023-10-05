import { useEffect, useState } from 'react';
import { INotes } from '../../types/interfaces/INotes';
import { useNotes } from '../../hooks/useNotes';

const colorOptions = {
    LIGTH_BLUE: '#BAE2FF',
    AQUAMARINE: '#B9FFDD',
    LIGTH_YELLOW: '#FFE8AC',
    LIGTH_PINK: '#FFCAB9',
    LIGTH_RED: '#F99494',
    BLUE: '#9DD6FF',
    PURPLE: '#ECA1FF',
    GREEN: '#DAFF8B',
    LIGTH_SALMON: '#FFA285',
    SILVER: '#CDCDCD',
    GRAY: '#979797',
    OLIVE: '#A99A7C',
};

interface ColorModalProps {
    isOpen: boolean;
    onSelectColor: (color: string) => void;
    buttonPosition: { top: number; left: number };
    noteData: INotes;
    id: string;
}

function ColorsModal({
    isOpen,
    onSelectColor,
    buttonPosition,
    noteData,
    id,
}: ColorModalProps) {
    const { updateNotes } = useNotes();
    const [selectedColor, setSelectedColor] = useState<string>('');

    useEffect(() => {
        setSelectedColor('');
    }, [isOpen]);

    const handleColorClick = (color: string) => {
        updateNotes(id, {
            title: noteData.title,
            color: color,
            is_favorite: noteData.is_favorite,
        });
        setSelectedColor(color);
        onSelectColor(color);
    };

    const modalStyle = {
        top: buttonPosition.top + 40,
        left: buttonPosition.left,
    };

    return (
        <div
            className={`${
                isOpen ? 'inline-block' : 'hidden'
            } absolute z-10 overflow-y-auto`}
        >
            <div
                className="flex items-center justify-center min-h-full"
                style={modalStyle}
            >
                <div className="modal-container bg-white w-[55%] md:w-full h-full mx-auto rounded shadow-lg z-50 p-2">
                    <div className="modal-content">
                        <div className="flex gap-1 flex-wrap">
                            {Object.entries(colorOptions).map(
                                ([name, color]) => (
                                    <div
                                        key={name}
                                        className={`w-5 md:w-5 h-5 p-1 rounded-full cursor-pointer ${
                                            selectedColor === color
                                                ? 'border-4 border-blue-500'
                                                : ''
                                        }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorClick(color)}
                                    ></div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorsModal;
