import jobposting from '../assets/posting.webp';
import applicationtracking from '../assets/tracking.webp';
import resumeParsing from '../assets/parsing.webp';
import interviewScheduling from '../assets/scheduling.webp';
import employeeManagement from '../assets/emplyee-managment.webp';
import payrollManagement from '../assets/payroll-managment.webp';
import liveChat from '../assets/livechat.webp';
import feedbackManagement from '../assets/feedback-managment.webp';
import campaignManagement from '../assets/campaign.webp';
import addManagement from '../assets/ad-managment.webp';
import customDevelopment from '../assets/development.webp';
import itSupport from '../assets/IT-Support.webp';
import cybersecurity from '../assets/cyberSecurity.webp';
import infrastructureManagement from '../assets/infra.webp';
import leaveManagement  from '../assets/leaveManagement.webp';
import ticketingSystem from '../assets/ticketingSystem.webp';
import knowledgease from '../assets/knowledgeBase.webp';
import analytics from '../assets/analytics.webp';
import contentScheduling from '../assets/contentScheduling.webp' ;


import performanceReviews from '../assets/performanceReviews.webp'



const services = [
  {
    title: 'Recruitment',
    link: 'https://example.com/recruitment', // Main service link
    items: [
      {
        title: 'Job Posting',
        description: 'Allow companies to post job openings.',
        imgSrc: jobposting,
        link: 'https://example.com/job-posting', // Link for the individual item
      },
      {
        title: 'Applicant Tracking',
        description: 'Track and manage job applications.',
        imgSrc: applicationtracking,
        link: 'https://example.com/applicant-tracking',
      },
      {
        title: 'Resume Parsing',
        description: 'Extract data from resumes for easy management.',
        imgSrc: resumeParsing,
        link: 'https://example.com/resume-parsing',
      },
      {
        title: 'Interview Scheduling',
        description: 'Tools for scheduling and managing interviews.',
        imgSrc: interviewScheduling,
        link: 'https://example.com/interview-scheduling',
      },
    ],
  },
  {
    title: 'HR Services',
    link: 'https://example.com/hr-services',
    items: [
      {
        title: 'Employee Management',
        description: 'Manage employee records and profiles.',
        imgSrc: employeeManagement,
        link: 'https://example.com/employee-management',
      },
      {
        title: 'Payroll Management',
        description: 'Handle payroll calculations and disbursements.',
        imgSrc: payrollManagement,
        link: 'https://example.com/payroll-management',
      },
      {
        title: 'Leave Management',
        description: 'Track employee leave and absences.',
        imgSrc: leaveManagement,
        link: 'https://example.com/leave-management',
      },
      {
        title: 'Performance Reviews',
        description: 'Tools for conducting and recording performance reviews.',
        imgSrc: performanceReviews,
        link: 'https://example.com/performance-reviews',
      },
    ],
  },
  {
    title: 'Customer Support',
    link: 'https://example.com/customer-support',
    items: [
      {
        title: 'Ticketing System',
        description: 'Manage customer support tickets.',
        imgSrc: ticketingSystem,
        link: 'https://example.com/ticketing-system',
      },
      {
        title: 'Knowledge Base',
        description: 'Provide a repository of FAQs and support articles.',
        imgSrc: knowledgease,
        link: 'https://example.com/knowledge-base',
      },
      {
        title: 'Live Chat',
        description: 'Offer real-time support via chat.',
        imgSrc: liveChat,
        link: 'https://example.com/live-chat',
      },
      {
        title: 'Feedback Management',
        description: 'Collect and analyze customer feedback.',
        imgSrc: feedbackManagement,
        link: 'https://example.com/feedback-management',
      },
    ],
  },
  {
    title: 'Social Media Marketing',
    link: 'https://example.com/social-media-marketing',
    items: [
      {
        title: 'Campaign Management',
        description: 'Create and manage social media campaigns.',
        imgSrc: campaignManagement,
        link: 'https://example.com/campaign-management',
      },
      {
        title: 'Content Scheduling',
        description: 'Schedule and automate content posting.',
        imgSrc: contentScheduling ,
        link: 'https://example.com/content-scheduling',
      },
      {
        title: 'Analytics',
        description: 'Track social media performance and engagement metrics.',
        imgSrc: analytics,
        link: 'https://example.com/analytics',
      },
      {
        title: 'Ad Management',
        description: 'Create and manage paid advertisements.',
        imgSrc: addManagement,
        link: 'https://example.com/ad-management',
      },
    ],
  },
  {
    title: 'IT Solutions',
    link: 'https://example.com/it-solutions',
    items: [
      {
        title: 'Custom Development',
        description: 'Offer custom software development services.',
        imgSrc: customDevelopment,
        link: 'https://example.com/custom-development',
      },
      {
        title: 'IT Support',
        description: 'Provide technical support and troubleshooting.',
        imgSrc: itSupport,
        link: 'https://example.com/it-support',
      },
      {
        title: 'Infrastructure Management',
        description: 'Manage IT infrastructure and systems.',
        imgSrc: infrastructureManagement,
        link: 'https://example.com/infrastructure-management',
      },
      {
        title: 'Cybersecurity',
        description: 'Implement security measures and manage threats.',
        imgSrc: cybersecurity,
        link: 'https://example.com/cybersecurity',
      },
    ],
  },
];

export default services;
