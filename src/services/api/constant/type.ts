export interface Team {
    id: string;
    name: string;
    abbreviation: string;
    nickname?: string;
}

export interface SimpleTeam {
    id: string;
}

// Player interface
export interface Player {
    id: string;
    name: string;
    imageUrl: string;
    imageUrl128: string;
    position: string;
    number: number | null;
    team: SimpleTeam;
}

// Game interface
export interface Game {
    id: string;
    status: "UNPLAYED" | "LIVE" | "FINISHED" | string;
    isLive: boolean;
    league: string;
    startDate: string;
    homeTeam: Team;
    awayTeam: Team;
}

// Market interface
export interface Market {
    id: string;
    name: string;
}

// Prop interface (for individual player props)
export interface PlayerProp {
    // This is likely an inner object in the props array, but you didn't show its structure
    // Add appropriate fields based on the actual data
    id?: string;
    line?: number;
    over?: number;
    under?: number;
}

// Main player prop item interface
export interface PlayerPropItem {
    game: Game;
    groupId: string;
    market: Market;
    parlaySelectionsCount: number;
    player: Player;
    props: PlayerProp[];
    sport: string;
}

// Pagination interface
export interface Pagination {
    page: number;
    size: number;
    totalCount: number;
    lastPage: number;
}

// Complete API response interface
export interface PlayerShotsOnTargetResponse {
    props: PlayerPropItem[];
    pagination: Pagination;
}
