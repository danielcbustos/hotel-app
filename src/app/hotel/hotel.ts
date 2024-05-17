import { Rooms } from "./rooms";


export interface Hotel {
    id: number;
    name: string;
    description: string;
    isEnable: boolean;
    rooms: Rooms[];

}
