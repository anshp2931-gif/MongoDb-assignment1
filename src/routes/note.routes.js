const express = require("express");
const router = express.Router();

const {
  createNote,
  createBulkNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  deleteBulkNotes,
} = require("../controllers/note.controller");

// Bulk operations - MUST come before /:id routes
router.post("/bulk", createBulkNotes);
router.delete("/bulk", deleteBulkNotes);

// Single note operations
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
