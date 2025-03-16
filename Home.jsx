import { HomeIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [homes, setHomes] = useState([]); // Renamed from `home` to `homes` (plural)

    const fetchHome = async () => {
        try {
            const response = await fetch("https://dragonball-api.com/api/characters");
            const data = await response.json();
            if (data.items) {
                setHomes(data.items); // Adjust based on actual API response structure
            }
        } catch (error) {
            console.error("Error fetching home:", error);
        }
    };

    useEffect(() => {
        fetchHome();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dragon Ball Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {homes.map((character) => (
                    <div key={character.id} className="border p-4 rounded-md shadow-md">
                        <img src={character.image} alt={character.name} className="w-full h-40 object-contain mb-2" />
                        <h2 className="text-lg font-semibold">{character.name}</h2>
                        <p className="text-red-500">ID: {character.id}</p>
                        <Link to={`/home/${character.id}`} className="block mt-2 text-sm text-blue-600">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
