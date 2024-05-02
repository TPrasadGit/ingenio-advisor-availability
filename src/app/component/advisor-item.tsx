import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvailablilityStatus } from "../enum/availability-status";
import { IAdvisorProps } from "../model/IAdvisor";
import Image from "next/image";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import AdvisorItemButton from "./advisor-item-button";
import { ContactMode } from "../enum/contact-mode";

/**
 * Component to show the Advisor details and buttons
 * @param IAdvisorProps
 * @returns 
 */
export default function AdvisorItem({
    id,
    name,
    price,
    callAvailability,
    chatAvailability,
    pictureUrl,
}: IAdvisorProps) {
    const isCallAvailable = callAvailability === AvailablilityStatus.Online;
    const isChatAvailable = chatAvailability === AvailablilityStatus.Online;

    return (
        <div key={id} className="flex justify-between py-4 border-2 border-transparent border-b-gray-200">
            <div className="flex flex-row">
                <Image className="rounded-full mx-4" src={pictureUrl} alt={name} width={175} height={175} priority={true}/>
                <label className="font-bold font-default text-advisor text-lg">{name}</label>
            </div>
            <div className="flex flex-col text-left">
                <label className="font-bold font-default">{price}</label>
                <AdvisorItemButton isAvailable={isCallAvailable} contactMode={ContactMode.Call} />
                <AdvisorItemButton isAvailable={isChatAvailable} contactMode={ContactMode.Chat} />
            </div>
        </div>
    );
}