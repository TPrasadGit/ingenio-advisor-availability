'use client'

import AdvisorList from "../component/advisor-list";
import Clock from "../component/clock";
import PageTitle from "../component/page-title";
import { useUpdateAdvisorStatus } from "../lib/hook/useUpdateAdvisorStatus";

export default function AdvisorWrapper() {
    const { count, advisors } = useUpdateAdvisorStatus();

    return (
        <>
            <Clock time={count}/>
            <PageTitle title={"Advisor Availability"} />
            <AdvisorList advisorList={advisors} />
        </>
    );
}
