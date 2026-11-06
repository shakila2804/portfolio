import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { finished } from 'node:stream/promises';
import PDFDocument from 'pdfkit';

const root = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(root, 'public');
const outputPath = path.join(outputDirectory, 'resume.pdf');
const fontPath = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf';
const boldFontPath = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf';

await fs.promises.mkdir(outputDirectory, { recursive: true });

const document = new PDFDocument({
  size: 'A4',
  margins: { top: 42, bottom: 42, left: 48, right: 48 },
  info: {
    Title: 'Shakila Sekar - Resume',
    Author: 'Shakila Sekar',
    Subject: 'Senior React.js Developer',
  },
});
const output = fs.createWriteStream(outputPath);
document.pipe(output);
document.registerFont('Regular', fontPath);
document.registerFont('Bold', boldFontPath);

const pageWidth = document.page.width;
const pageHeight = document.page.height;
const left = document.page.margins.left;
const right = pageWidth - document.page.margins.right;
const contentWidth = right - left;
const bottom = pageHeight - document.page.margins.bottom;
const colors = {
  ink: '#1C2C36',
  muted: '#536570',
  accent: '#176F6B',
  rule: '#D5E0E2',
  header: '#173443',
  headerMuted: '#D7E8E9',
};

function addText(text, {
  font = 'Regular',
  size = 8.6,
  color = colors.ink,
  x = left,
  width = contentWidth,
  lineGap = 2,
  continued = false,
} = {}) {
  document.font(font).fontSize(size);
  const options = { width, lineGap, continued };
  const height = document.heightOfString(text, options);
  if (!continued && document.y + height > bottom) document.addPage();
  document.fillColor(color).text(text, x, document.y, options);
}

function addSection(title) {
  if (document.y + 32 > bottom) document.addPage();
  document.moveDown(0.55);
  addText(title.toUpperCase(), { font: 'Bold', size: 9.5, color: colors.accent, lineGap: 0 });
  const ruleY = document.y + 4;
  document.moveTo(left, ruleY).lineTo(right, ruleY).lineWidth(0.6).strokeColor(colors.rule).stroke();
  document.y = ruleY + 10;
}

function addBullet(text, indent = 11) {
  document.font('Regular').fontSize(8.35);
  const bulletX = left + indent;
  const textX = bulletX + 9;
  const width = right - textX;
  const height = document.heightOfString(text, { width, lineGap: 1.4 });
  if (document.y + height > bottom) document.addPage();
  const y = document.y;
  document.circle(bulletX + 2, y + 6, 1.35).fill(colors.accent);
  addText(text, { size: 8.35, x: textX, width, lineGap: 1.4 });
  document.moveDown(0.2);
}

function addRole(title, company, location, dates) {
  if (document.y + 40 > bottom) document.addPage();
  addText(title, { font: 'Bold', size: 9.4, lineGap: 1 });
  addText(`${company}${location ? `  |  ${location}` : ''}`, {
    font: 'Bold', size: 8.2, color: colors.muted, lineGap: 1,
  });
  addText(dates, { size: 8, color: colors.muted, lineGap: 1 });
  document.moveDown(0.3);
}

function addProject(title, year, overview, role, bullets = []) {
  if (document.y + 38 > bottom) document.addPage();
  addText(`${title}${year ? ` (${year})` : ''}`, { font: 'Bold', size: 9.1, lineGap: 1 });
  addText(`Project Overview: ${overview}`, { size: 8.3, lineGap: 1.5 });
  if (role) addText(`Role: ${role}`, { size: 8.3, lineGap: 1.5 });
  for (const bullet of bullets) addBullet(bullet);
  document.moveDown(0.35);
}

document.rect(0, 0, pageWidth, 100).fill(colors.header);
addText('Shakila Sekar', { font: 'Bold', size: 24, color: '#FFFFFF', x: left, width: contentWidth, lineGap: 0 });
document.y = 70;
addText('SENIOR REACT.JS DEVELOPER', { font: 'Bold', size: 9.5, color: '#9AD4CE', lineGap: 0 });
document.y = 87;
addText('shakilass2804@gmail.com  |  +91 9094180062', {
  size: 8.4, color: colors.headerMuted, lineGap: 0,
});
document.y = 116;

addSection('Professional Summary');
addText(
  'Highly skilled React Developer with nearly 6+ years of experience in front-end development (React.js, HTML, CSS, etc.) and implementing front-end architectures that have resulted in significant increases in page load speed and user engagement. Proficient in collaborating with back-end teams to integrate user-facing elements with server-side logic, implementing automated testing platforms, and optimizing components for maximum performance. Adept at identifying and resolving performance and scalability issues, staying up-to-date with emerging technologies and frameworks, and reducing development time for new projects.',
  { size: 8.5, lineGap: 2 }
);

addSection('Employment History');
addRole('Senior React.js Developer', 'Acsia Technology', '', 'September 2025 – Present');
addBullet('Mitra – Project Management Tool: Contributing to Mitra, a project management application covering project tracking, task tracking and leave-status visibility, with dedicated pages for planning, reporting and project administration.');
addBullet('Project and Task Tracking: Working on a tool that organises projects through Projects, Sub Projects, Modules and Activities pages, bringing project structure and task-tracking information together.');
addBullet('Time, Resources and Leave: Involved in an application that includes Timesheet and Resource Plan pages, alongside leave-status visibility, covering time tracking and resource-planning information.');
addBullet('Risk and Issue Tracking: Working within a project management application with dedicated Risks and Issues pages for tracking project-related risks and issues.');
addBullet('Dashboard and Reports: Contributing to a tool with Dashboard and Reports pages that bring project information into overview and reporting sections.');
addBullet('Supporting Project Functions: Working on Mitra’s broader project-management scope, which includes Competencies, Documents and Settings pages alongside its tracking and planning features.');

addRole('Senior React.js Developer', 'Cholamandalam Investment and Finance Company', 'Chennai, Tamil Nadu', 'May 2022 – March 2025');
addBullet('Improved Performance: Developed and implemented a new front-end architecture using React.js and Next.js, resulting in a 25% increase in page load speed and a 15% increase in user engagement.');
addBullet('Reusable Component Library: Designed and developed a reusable component library, cutting development time for new projects by 40%.');
addBullet('State Management Optimization: Utilized Redux for state management, reducing code complexity by 25% and increasing team productivity by 15%.');
addBullet('Performance Fixes: Identified and resolved performance and scalability issues, resulting in a 50% improvement in page load speed.');
addBullet('ES6+ Adoption: Advocated for and led the adoption of ES6+ syntax, improving code maintainability and developer productivity.');
addBullet('UI Library: Created a company-wide UI library in JavaScript, increasing development efficiency across teams.');

addRole('Technical Copyeditor', 'Exeter Premedia Services Pvt. Ltd.', 'Chennai, Tamil Nadu', 'August 2018 – April 2020');
addBullet('Content Editing & Proofreading: Edited and proofread over 50 eBooks and digital publications, focusing on grammar, spelling, punctuation, and consistency, improving readability by 30%.');
addBullet('Formatting & Layout: Worked closely with designers to ensure correct formatting and alignment in digital publications, ensuring seamless viewing across devices (e.g., tablets, smartphones, eReaders).');

addSection('Skills');
addText('Frameworks/Libraries: React.js · Redux · React Router · Chart.js', { size: 8.4 });
addText('Languages: JavaScript (ES6+) · HTML5 · CSS3 · Bootstrap · Material-UI · TypeScript', { size: 8.4 });
addText('State Management: Redux · Context API', { size: 8.4 });
addText('Performance Optimization: Lazy Loading · SSR · Code Splitting', { size: 8.4 });
addText('Tools: Git · GitHub · VSCode · Figma', { size: 8.4 });

addSection('Languages');
addText('Tamil (native) · English · Telugu', { size: 8.4 });

addSection('Projects Worked On');
addProject(
  'Mitra – Project Management Tool',
  '2026',
  'Mitra is a project management tool covering task tracking, project tracking and leave-status visibility. Its pages cover project organisation, activity tracking, timesheets, resource planning, risks, issues, documents and reporting.',
  'Senior React.js Developer at Acsia Technology',
  [
    'Task and Project Tracking: Task tracking and project tracking, with pages for Projects, Sub Projects, Modules and Activities.',
    'Time, Resources and Leave: Timesheet and Resource Plan pages, alongside leave-status visibility.',
    'Risks and Issues: Dedicated Risks and Issues pages within the project management tool.',
    'Dashboard and Reporting: Dashboard and Reports pages.',
    'Supporting Pages: Competencies, Documents and Settings.',
  ]
);
addProject(
  'Chola One – MIS',
  '2023',
  'Chola One is a loan app developed and owned by Cholamandalam Investment and Finance Company Limited (Chola), where you can apply for instant personal loans ranging up to INR 3 lakhs. The loan process is 100% online. Chola One processes your personal loan application with very minimal documentation, the entire process taking less than 15 minutes. Your loan eligibility is completely based on your CIBIL score.',
  '',
  [
    'Converted design Figma mockups into ReactJS TypeScript code.',
    'Wrote tests and debugged code to ensure the stability and reliability of MIS applications.',
    'Developed a reusable component library for future use, reducing development time for new projects and optimizing applications for maximum speed and scalability.',
    'Worked with charts and maps.',
    'Worked across browsers including Safari, Firefox and Chrome.',
    'Collaborated with other developers to ensure that the code is efficient, maintainable, and scalable.',
  ]
);
addProject(
  'C2B – (Click To Borrow)',
  '',
  'Click To Borrow is a loan app developed and owned by Cholamandalam Investment and Finance Company Limited (Chola), where you can apply for a loan against shares. Your loan eligibility is completely based on your share pledge.',
  '',
  [
    'Converted design Figma mockups into ReactJS TypeScript code.',
    'Worked on e-mandate, e-NACH and UPI-mandate.',
    'Facilitated the procedure after pledging a share, including collecting banking details and a 1-rupee penny-drop verification, obtaining e-mandate and UPI-mandate acceptance for the auto-debit option, and generating the agreement form for the loan. As per the norms, the process included stamping and an Aadhaar e-sign agreement.',
  ]
);
addProject(
  'Chola One – CFA',
  '',
  'Chola One is a loan app developed and owned by Cholamandalam Investment and Finance Company Limited (Chola), where you can apply for vehicle and home loans. My involvement in this project was to show the loan details.',
  '',
  [
    'Converted design Figma mockups into ReactJS TypeScript code.',
    'Access control and user management are dependent on the logged-in user’s role of access.',
    'Developed a reusable component library for future use, reducing development time for new projects and optimizing applications for maximum speed and scalability.',
    'Worked across browsers including Safari, Firefox and Chrome.',
    'Collaborated with other developers to ensure that the code is efficient, maintainable, and scalable.',
  ]
);

addSection('Education Details');
addRole('BCA', 'University of Madras, Chennai', '', 'May 2018 – October 2020  |  Graduated with 60%');
addRole('Computer Technology', 'Murugappa Polytechnic College, Chennai', '', 'August 2014 – April 2017  |  Graduated with 90%');
addRole('10th Grade', 'Jaigopal Garodia Vivekananda Vidyalaya', '', 'August 2013 – April 2014  |  Graduated with 7 CGPA');

document.end();
await finished(output);
console.log(`Generated ${outputPath}`);