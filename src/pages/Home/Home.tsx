import { useEffect } from 'react';
import CreateCard from '../../components/Cards/CardCreate';
import CardNotes from '../../components/Cards/CardNotes';
import { useNotes } from '../../hooks/useNotes';
import { IPropsHome } from '../../types/interfaces/INotes';

function Home({ search }: IPropsHome) {
    const { getNotes, notes } = useNotes();

    useEffect(() => {
        getNotes(search);
    }, [getNotes, search]);

    const favoriteNotes = notes.filter((note) => note.is_favorite === true);
    const notFavoriteNotes = notes.filter((note) => note.is_favorite === false);
    return (
        <div className="bg-body-color h-full min-h-screen">
            <CreateCard />
            <div>
                <div className="sm:ml-32 ml-14 mt-14">
                    <span>Favoritas</span>
                </div>
                <div className="flex flex-wrap sm:px-24 px-5">
                    {favoriteNotes.map((note) => (
                        <div
                            className="w-full md:w-1/3 px-4 pb-12 pt-2"
                            key={note.id}
                        >
                            <CardNotes noteData={note} id={note.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="sm:ml-32 ml-14">
                    <span>Outras</span>
                </div>
                <div className="flex flex-wrap sm:px-24 px-5">
                    {notFavoriteNotes.map((note) => (
                        <div
                            className="w-full md:w-1/3 px-4 pb-12 pt-2"
                            key={note.id}
                        >
                            <CardNotes noteData={note} id={note.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
