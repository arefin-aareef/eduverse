import useFavorite from "../../../hooks/useFavorite";


const MyFavorite = () => {
    const [favorite] = useFavorite()
    return (
        <div>
            <h2>Favorite</h2>
            <p>Total item: {favorite.length}</p>
        </div>
    );
};

export default MyFavorite;