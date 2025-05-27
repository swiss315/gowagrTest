import {PlayerShotsOnTargetResponse} from "@/services/api/constant/type";

export async function fetchPlayerShotsOnTarget(size: number = 30): Promise<PlayerShotsOnTargetResponse> {
    try {
        const url = `https://api.squads.game/bet/public-props?marketType=player_shots_on_target&size=${size}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data: PlayerShotsOnTargetResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching player shots on target datas:', error);
        throw error;
    }
}
