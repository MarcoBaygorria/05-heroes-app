import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
    return (
        <>
            <CustomJombotron
                title="Busqueda de SuperHeroes"
                description="Descubre, explora y administra tus SuperHeroes y Villanos"
            />

            <CustomBreadcrumbs currentPage="Buscador de heroes"
                breadcrumbs={
                    [
                        { label: 'Home1', to: '/' },
                        { label: 'Home2', to: '/' },
                        { label: 'Home3', to: '/' },
                    ]
                }
            />
            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />

        </>
    )
}

export default SearchPage;
