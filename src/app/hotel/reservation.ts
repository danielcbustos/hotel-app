export interface Reservation {   
    id: number;
    hotelId: number;
    roomId: number;
    startDate: Date;
    endDate: Date;
    state: string;

}
