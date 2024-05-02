import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAdvisorButtonProps } from "../model/IAdvisor";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactMode } from "../enum/contact-mode";

/**
 * A button component to use for the Advisor actions
 * @param IAdvisorButtonProps 
 * @returns 
 */

export default function AdvisorItemButton({
    isAvailable,
    contactMode,
}: IAdvisorButtonProps) {

    /**
     * Shows a confirmation dialog for enabled buttons
     */
    const handleClick = () => {
        window.confirm(`Do you wish to ${contactMode}?`);
    };

    return (
        <button
            className={`font-default uppercase border-1 border-transparent rounded-sm my-0.5 px-0.5 min-w-36 advisor-button text-white ${isAvailable ? 'bg-online' : 'bg-offline'}`}
            disabled={!isAvailable}
            onClick={handleClick}
        >
            <FontAwesomeIcon className="mx-2" icon={contactMode === ContactMode.Call ? faPhone : faMessage} size={'sm'} />
            {`${contactMode} ${isAvailable ? 'Now' : 'Later'}`}
        </button>
    );
}