import CreateCard from '../../components/Cards/CardCreate';
import CardNotes from '../../components/Cards/CardNotes';

function Home() {
    return (
        <div className="bg-body-color h-full min-h-screen">
            <CreateCard />
            <div>
                <div className="ml-32">
                    <span>Favoritas</span>
                </div>
                <div className="flex flex-wrap px-24">
                    <div className="w-full md:w-1/3 px-4 pb-12 pt-2">
                        <CardNotes />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
