import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
    return (
        <>
            <CustomJombotron
                title="Busqueda de SuperHeroes"
                description="Descubre, explora y administra tus SuperHeroes y Villanos"
            />

            {/* Stats Dashboard */}
            <HeroStats />
        </>
    )
}

export default SearchPage;
