import { testrail } from "./testrailClient";

export async function addTestResult(
  runId: number,
  caseId: number,
  statusId: number,
  comment: string
) {
  return await testrail.post(
    `/add_result_for_case/${runId}/${caseId}`,
    {
      status_id: statusId,
      comment,
    }
  );
}