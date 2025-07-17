import { error } from "console";
import {
  readAllReports,
  createReport,
  readReportsBigThen,
} from "../DAL/reportsDAL.js";

export async function getAllReports(req, res) {
  try {
    const reports = await readAllReports();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addReport(req, res) {
  try {
    const result = await createReport(req.body);
    res.status(201).json({
      message: "Report created successfully!",
      id: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function reportsHighThen(req, res) {
  try {
    const result = await readReportsBigThen(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}
