import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clock({ time }: { time: number | undefined }) {
    return (
        <label className="absolute font-bold font-default text-lg right-2 text-advisor">
            <FontAwesomeIcon className="mx-4" icon={faClock} />
            {time ? new Date(time).toLocaleTimeString() : ''}
        </label>
    );
}