export interface IAdvisorProps {
    id: number;
    name: string;
    price: string;
    callAvailability: string;
    chatAvailability: string;
    pictureUrl: string;
}

export interface IAdvisorButtonProps {
    isAvailable: boolean;
    contactMode: string;
}

export interface IAdvisorListProps {
    advisorList: IAdvisorProps[];
}