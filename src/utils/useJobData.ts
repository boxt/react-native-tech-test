import { useEffect, useState } from "react";
import { Job, JobResponse } from "src/typing/types";
import jobsData from "../data/jobs.json";

export const useJobData = (): Job[] => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Simulated fetch
    const fetchJobs = async () => {
      const typedResponse = jobsData as JobResponse[];

      setJobs(
        typedResponse.map((item) => ({
          id: item.id,
          state: item.state,
          postcode: item.postcode,
          jobId: item.jobId,
        }))
      );
    };

    fetchJobs();
  }, []);

  return jobs;
};
