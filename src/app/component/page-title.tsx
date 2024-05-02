import ITitle from "../model/ITitle";

/**
 * Component to display title of the Page
 * @param title 
 * @returns 
 */
export default function PageTitle({ title }: ITitle) {
    return (
        <h3 className="font-bold font-default text-xl">{title}</h3>
    );
}