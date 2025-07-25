import React from 'react';
import './Submenu.css';

const submenuData = [
  {
    title: 'Creative & Design',
    sub: [
      {
        heading: 'Graphic Design',
        items: ['Logos', 'Brochures', 'Banners', 'Business cards', 'Social media graphics'],
      },
      {
        heading: 'Web Design',
        items: ['UI/UX', 'Wireframing'],
      },
      {
        heading: 'Illustration',
        items: ['Digital art', 'Character design', 'Storyboarding'],
      },
      {
        heading: 'Photography',
        items: ['Product', 'Portrait', 'Event', 'Stock'],
      },
      {
        heading: 'Videography',
        items: ['Shooting', 'Editing', 'Motion graphics'],
      },
      {
        heading: 'Animation',
        items: ['2D/3D', 'Explainer videos'],
      },
      {
        heading: 'Interior Design',
        items: ['Layouts', 'Mood boards', 'Virtual staging'],
      },
      {
        heading: 'Fashion Design',
        items: ['Sketches', 'Pattern making', 'Trend analysis'],
      },
    ],
  },
  {
    title: 'Writing & Content Creation',
    sub: [
      {
        heading: 'Content Writing',
        items: ['Blog posts', 'Articles', 'Website copy'],
      },
      {
        heading: 'Copywriting',
        items: ['Ad copy', 'Sales pages', 'Email campaigns'],
      },
      {
        heading: 'Technical Writing',
        items: ['Manuals', 'Guides', 'Documentation'],
      },
      {
        heading: 'Medical Writing',
        items: ['Health articles', 'Research summaries'],
      },
      {
        heading: 'Creative Writing',
        items: ['Fiction', 'Poetry', 'Scripts'],
      },
      {
        heading: 'Editing & Proofreading',
        items: ['Grammar', 'Style', 'Content editing'],
      },
      {
        heading: 'Translation',
        items: ['Documents', 'Websites', 'Subtitles'],
      },
      {
        heading: 'Resume & CV Writing',
        items: ['Professional resume creation'],
      },
    ],
  },
  {
    title: 'Digital Marketing & Branding',
    sub: [
      {
        heading: 'Digital Marketing',
        items: ['SEO', 'SEM', 'Email marketing', 'PPC ads'],
      },
      {
        heading: 'Social Media Management',
        items: ['Planning', 'Scheduling', 'Analytics'],
      },
      {
        heading: 'Brand Development',
        items: ['Identity', 'Positioning', 'Strategy'],
      },
      {
        heading: 'Influencer Marketing',
        items: ['Collaboration', 'Campaign planning'],
      },
      {
        heading: 'Public Relations',
        items: ['Press releases', 'Media outreach', 'Reputation'],
      },
    ],
  },
  {
    title: 'Technology & Development',
    sub: [
      {
        heading: 'Web Development',
        items: ['Frontend', 'Backend', 'Full-stack'],
      },
      {
        heading: 'Mobile App Development',
        items: ['iOS', 'Android'],
      },
      {
        heading: 'Software Development',
        items: ['Custom software', 'Scripts', 'Automation'],
      },
      {
        heading: 'Game Development',
        items: ['2D/3D games', 'Coding'],
      },
      {
        heading: 'IT Support',
        items: ['Troubleshooting', 'Installation', 'Remote support'],
      },
      {
        heading: 'Cybersecurity',
        items: ['Audits', 'Penetration testing', 'Risk management'],
      },
      {
        heading: 'Data Analysis & Science',
        items: ['Cleaning', 'Visualization', 'Modeling'],
      },
      {
        heading: 'AI & Machine Learning',
        items: ['Model development', 'Data training'],
      },
    ],
  },
  {
    title: 'Admin & Business Support',
    sub: [
      {
        heading: 'Virtual Assistant',
        items: ['Email', 'Scheduling', 'Research', 'Data entry'],
      },
      {
        heading: 'Project Management',
        items: ['Coordination', 'Workflow', 'Tool setup'],
      },
      {
        heading: 'Bookkeeping & Accounting',
        items: ['Invoicing', 'Tracking', 'Reporting'],
      },
      {
        heading: 'Business Consulting',
        items: ['Strategy', 'Improvement', 'Outreach'],
      },
      {
        heading: 'Editing & Proofreading',
        items: ['Grammar', 'Style', 'Content editing'],
      },
      {
        heading: 'Legal Services',
        items: ['Contract drafting', 'Legal research'],
      },
      {
        heading: 'Recruitment & HR',
        items: ['Sourcing', 'Interview coordination'],
      },
    ],
  },
  {
    title: 'Education & Training',
    sub: [
      {
        heading: 'Tutoring',
        items: ['Academic subjects', 'Test prep', 'Language coaching'],
      },
      {
        heading: 'Online Courses',
        items: ['Creation', 'Video lessons', 'Curriculum design'],
      },
      {
        heading: 'Coaching',
        items: ['Life', 'Career', 'Fitness'],
      },
      {
        heading: 'Workshops & Webinars',
        items: ['Live', 'Recorded training'],
      },
    ],
  },
  {
    title: 'Miscellaneous & Niche Services',
    sub: [
      {
        heading: 'Voiceover & Audio',
        items: ['Narration', 'Podcast editing', 'Sound design'],
      },
      {
        heading: 'Music Production',
        items: ['Songwriting', 'Composing', 'Mixing'],
      },
      {
        heading: 'Event Planning',
        items: ['Virtual coordination', 'In-person coordination'],
      },
      {
        heading: 'Survey & Market Research',
        items: ['Data collection', 'Analysis'],
      },
      {
        heading: 'Product Photography',
        items: ['E-commerce images', 'Styling'],
      },
      {
        heading: '3D Modeling & Printing',
        items: ['Design', 'Rendering', 'Prototyping'],
      },
      {
        heading: 'Translation & Localization',
        items: ['Adapting content'],
      },
      {
        heading: 'Proofreading & Editing',
        items: ['Ensuring error-free content'],
      },
      {
        heading: 'Resume & Cover Letter',
        items: ['Professional job materials'],
      },
      {
        heading: 'Podcast Production',
        items: ['Scripting', 'Editing', 'Publishing'],
      },
      {
        heading: 'Lead Generation',
        items: ['Finding clients', 'Finding customers'],
      },
      {
        heading: 'E-commerce Management',
        items: ['Product listing', 'Inventory', 'Support'],
      },
    ],
  },
  {
    title: 'Offline Freelancing',
    sub: [
      {
        heading: 'Event Planning',
        items: ['Venue booking', 'Catering', 'Coordination'],
      },
      {
        heading: 'Photography',
        items: ['Events', 'Portraits', 'Product'],
      },
      {
        heading: 'Home Repair',
        items: ['Plumbing', 'Electrical', 'General maintenance'],
      },
      {
        heading: 'Local Delivery',
        items: ['Groceries', 'Parcels', 'Documents'],
      },
      {
        heading: 'Personal Training',
        items: ['Fitness', 'Yoga', 'Wellness'],
      },
    ],
  },
];

const Submenu = () => (
  <div className="submenu-container">
    <div className="submenu-wrapper">
      {submenuData.map((section, idx) => (
        <div className="submenu-section" key={idx}>
          <div className="submenu-title">{section.title}</div>
          <div className="submenu-list mega-menu-list">
            {section.sub.map((subcat, subIdx) => (
              <div className="submenu-subcat" key={subIdx}>
                <div className="submenu-subheading">{subcat.heading}</div>
                <ul className="submenu-subitems">
                  {subcat.items.map((item, i) => (
                    <li className="submenu-item" key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Submenu; 