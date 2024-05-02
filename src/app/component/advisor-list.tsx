import { IAdvisorListProps } from "../model/IAdvisor";
import AdvisorItem from "./advisor-item";

/**
 * Lists all the Advisors
 * @param IAdvisorListProps
 * @returns 
 */
export default function AdvisorList({
    advisorList,
}: IAdvisorListProps) {
    return (
        <div className="py-16 w-full">
            {advisorList.map((advisor, index) => (
                <AdvisorItem key={index} {...advisor} />
            ))}
        </div>
    );
}