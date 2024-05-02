import { IAdvisorProps } from "@/app/model/IAdvisor";
import { useEffect, useRef, useState } from "react";
import {
  getAdvisorsList,
  getAllAdvisorAvailabilityStatus,
} from "../service/advisor-service";

/**
 * A custom hook holds the logic to call the service and refresh the status at every 30 seconds
 * @returns 
 */
export const useUpdateAdvisorStatus = () => {
  const [count, setCount] = useState<number>();
  const [advisors, setAdvisors] = useState<IAdvisorProps[]>([]);

  const getAdvisorStatusIntervalId = useRef<NodeJS.Timeout>();

  /**
   * Hook to run on first load
   */
  useEffect(() => {
    // Calling the service to fetch Advisors
    getAdvisorsList().then((value) => {
      setCount(Date.now());
      setAdvisors(value);
    });

    /**
     * Clearing and setting the Interval to call the service for fetching status. 
     * It sets the 'count' at every 30 seconds, triggering the service call in the useEffect hook below.
     * */
    clearInterval(getAdvisorStatusIntervalId.current);
    getAdvisorStatusIntervalId.current = setInterval(() => {
      setCount(Date.now());
    }, 30000);
  }, []);

  /**
   * Hook to run at every 30 seconds
   * Calls the service to update the Advisor status
   */
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

  /**
   * Hook to run when the component unmounts.
   */
  useEffect(() => {
    return () => {
      clearInterval(getAdvisorStatusIntervalId.current);
    };
  }, []);

  return { count, advisors };
};
