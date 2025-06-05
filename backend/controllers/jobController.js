import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel.js';

// DESC     Get all jobs
// ROUTE    GET /jobs/
// ACCESS   Public

export const getAllJobs = asyncHandler(async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // Sort by newest first
    console.log(`Found ${jobs.length} jobs`);
    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching all jobs:", error);
    res.status(500).json({ error: error.message });
  }
});

// DESC     Post a Job
// Route    POST /jobs/
// Access   Private

export const postJob = asyncHandler(async (req, res) => {
  try {
    const {
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      companyURL,
      workType,
      payScale,
      skills,
    } = req.body;

    // Validate required fields
    if (!jobTitle || !jobType || !jobDescription || !companyName || 
        !companyURL || !workType || !payScale || !skills) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new job
    let job = new Job({
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      companyURL,
      workType,
      payScale,
      skills,
    });

    // Save job to database
    job = await job.save();
    console.log("Job created with ID:", job._id);
    
    // Return success response
    res.status(201).json({ 
      success: true,
      id: job._id, 
      job: job 
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: error.message });
  }
});

// DESC     Get job by Id
// ROUTE    GET /jobs/:id
// ACCESS   Public

export const getJob = asyncHandler(async (req, res) => {
  try {
    console.log(`Fetching job with ID: ${req.params.id}`);
    
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid job ID format' });
    }
    
    const job = await Job.findById(req.params.id);

    if (!job) {
      console.log(`No job found with ID: ${req.params.id}`);
      return res.status(404).json({ error: 'No job found with this ID' });
    }

    console.log(`Found job: ${job.jobTitle}`);
    res.status(200).json({ job: job });
  } catch (error) {
    console.error(`Error fetching job with ID ${req.params.id}:`, error);
    res.status(500).json({ error: error.message });
  }
});
