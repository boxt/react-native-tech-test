export type Job = {
  id: string;
  state: "offer" | "done";
  postcode: string;
  jobId: string;
};

export type JobResponse = {
  id: string;
  state: "offer" | "done";
  postcode: string;
  jobId: string;
  details: {
    description: string;
    assignedEngineer: string;
    createdAt: string; // ISO timestamp
  };
  metadata: {
    priority: "low" | "medium" | "high" | "urgent";
    tags: string[];
    history: {
      event: string;
      timestamp: string; // ISO timestamp
    }[];
  };
};
