import ITitle from "../model/ITitle";

export default function PageTitle({ title }: ITitle) {
    return (
        <h3 className="font-bold font-default text-xl">{title}</h3>
    );
}