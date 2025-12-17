import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJombotron } from "@/components/custom/CustomJombotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useMemo, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"


export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const activeTab = searchParams.get('tab') ?? 'all';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all'
    }, [activeTab])

    // const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

    //Peticion HTTP tanstack query
    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5,
    })
    console.log({ heroesResponse });

    return (
        <>
            <>
                {/* Header */}
                <CustomJombotron
                    title="Universo de SuperHeroes"
                    description="Descubre, explora y administra tus SuperHeroes y Villanos"
                />

                <CustomBreadcrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />


                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'all');
                            return prev
                        })}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev
                            })}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                return prev
                            })}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev
                            })}
                        >Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value="villains">
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    )
}


