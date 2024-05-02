import { IAdvisorProps } from "@/app/model/IAdvisor";

// URL Constants
const baseUrl = "https://demo2255213.mockable.io/";
const advisorUrl = "listings";
const advisorAvailabilityUrl = "advisor-availability?advisorId=";

/**
 * Method to call the API to fetch Advisor List
 * @returns 
 */
export const getAdvisorsList = async () => {
  let advisorData = await fetch(`${baseUrl}${advisorUrl}`);
  let advisorList: IAdvisorProps[] = [];
  await advisorData.json().then(value => {
    advisorList = value.data.map((advisor: { [x: string]: any }) => {
      return {
        id: advisor.id,
        name: advisor.name,
        price: advisor.price,
        pictureUrl: advisor.pictureUrl,
        callAvailability: advisor["call-availability"],
        chatAvailability: advisor["chat-availability"],
      };
    })
  });
  return advisorList;
};

/**
 * Generates and returns requests for specific Advisor ID
 * @param id 
 * @returns 
 */
export const getAdvisorAvailabilityStatus = (id: number) => {
  return fetch(`${baseUrl}${advisorAvailabilityUrl}${id}`);
};

/**
 * Call multiple requests for all Advisor IDs.
 * Uses Promise.all to fetch all requests instead of calling sequentially.
 * @param advisorIds 
 * @returns 
 */
export const getAllAdvisorAvailabilityStatus = async (
  advisorIds: Array<number>
) => {
  const requests: Promise<Response>[] = [];
  advisorIds.forEach((id) => {
    requests.push(getAdvisorAvailabilityStatus(id));
  });

  const advisorAvailabilityData = await Promise.all(requests);
  const responseArray = advisorAvailabilityData.map(async (res) => {
    let status = {
      callAvailability: '',
      chatAvailability: '',
    };
    await res.json().then(value => {
      status.callAvailability = value['call-availability'];
      status.chatAvailability = value['chat-availability'];
    });
    return { status: status, id: parseInt(res.url.split("advisorId=")[1]) };
  });
  return await Promise.all(responseArray);
};