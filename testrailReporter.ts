import { testrail } from "./testrailClient";

export async function addTestResult(
  runId: number,
  caseId: number,
  statusId: number,
  comment: string
) {
  try {
    const response = await testrail.post(
      `/add_result_for_case/${runId}/${caseId}`,
      {
        status_id: statusId,
        comment,
      }
    );

    console.log(`✅ Result sent to TestRail: Case ${caseId}`);
    return response.data;

  } catch (error: any) {
    console.error("❌ TestRail Error:", error.response?.data || error.message);
    throw error;
  }
}