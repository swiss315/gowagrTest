import {PlayerShotsOnTargetResponse} from "@/services/api/constant/type";

export async function fetchPlayerShotsOnTarget(size: number = 30, page: number = 1): Promise<PlayerShotsOnTargetResponse> {
    try {
        const url = `https://staging-api.squads.game/bet/public-props?marketType=player_shots_on_target&size=${size}&page=${page}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data: PlayerShotsOnTargetResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching player shots on target data:', error);
        throw error;
    }
}
