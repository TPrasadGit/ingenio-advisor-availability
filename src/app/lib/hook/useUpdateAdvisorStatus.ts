import { IAdvisorProps } from "@/app/model/IAdvisor";
import { useEffect, useRef, useState } from "react";
import {
  getAdvisorsList,
  getAllAdvisorAvailabilityStatus,
} from "../service/advisor-service";

export const useUpdateAdvisorStatus = () => {
  const [count, setCount] = useState<number>();
  const [advisors, setAdvisors] = useState<IAdvisorProps[]>([]);

  const getAdvisorStatusIntervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    getAdvisorsList().then((value) => {
      setCount(Date.now())
      setAdvisors(value);
    });

    clearInterval(getAdvisorStatusIntervalId.current);
    getAdvisorStatusIntervalId.current = setInterval(() => {
      setCount(Date.now());
    }, 30000);
  }, []);

  useEffect(() => {
    if (advisors.length > 0) {
      const advisorIds = advisors.map((advisor) => advisor.id);
      let advisorUpdatedStatus = advisors;
      getAllAdvisorAvailabilityStatus(advisorIds).then((value) => {
        value.forEach((response) => {
          let advisor = advisorUpdatedStatus.find(
            (advisor) => advisor.id === response.id
          );
          if (advisor) {
            advisor.callAvailability = response.status.callAvailability;
            advisor.chatAvailability = response.status.chatAvailability;
          }
        });
      });
      setAdvisors(advisorUpdatedStatus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    return () => {
      clearInterval(getAdvisorStatusIntervalId.current);
    };
  }, []);

  return { count, advisors };
};
