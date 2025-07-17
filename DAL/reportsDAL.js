import { connect } from "../DataBase/db.js";

//GET reports
export async function readAllReports() {
  const Db = await connect();
  const reports = await Db.collection("intel_reports").find().toArray();
  return reports;
}

//POST reports
export async function createReport(reportData) {
  const db = await connect();
  const collection = db.collection("intel_reports");
  if (!reportData.timestamp) {
    reportData.timestamp = new Date();
  }
  if (reportData.confirmed === undefined) {
    reportData.confirmed = false;
  }
  const result = await collection.insertOne(reportData);
  return result;
}

//GET reports/high

export async function readReportsBigThen(level) {
  const Db = await connect();
  const reports = await Db.collection("intel_reports").find({threatLevel : {$lt:Number(level)}}).toArray();
  return reports;
}




