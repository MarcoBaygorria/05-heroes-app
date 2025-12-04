import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJombotron } from "@/components/custom/CustomJombotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"


export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')
    return (
        <>
            <>
                {/* Header */}
                <CustomJombotron
                    title="Universo de SuperHeroes"
                    description="Descubre, explora y administra tus SuperHeroes y Villanos"
                />

                {/* Stats Dashboard */}
                <HeroStats />


                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setActiveTab('all')}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setActiveTab('favorites')}>
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes"
                            onClick={() => setActiveTab('heroes')}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains"
                            onClick={() => setActiveTab('villains')}
                        >Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        <HeroGrid />
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    )
}


