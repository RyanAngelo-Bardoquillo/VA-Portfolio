import React from 'react'

const projects = [
  {
    title: 'Client Contact List Dashboard',
    description: 'A centralized dashboard for managing client contacts and communication history.',
    tags: ['Dashboard', 'CRM', 'Contacts'],
    url: 'https://www.notion.so/208dbde70f488029bdb7c13047f2caf8?v=208dbde70f4880b2bf6e000cc470bdd9&source=copy_link' 
  },
  {
    title: 'Task Management Dashboard',
    description: 'Streamlined task tracking and project workflow management.',
    tags: ['Tasks', 'Productivity', 'Dashboard'],
    url: 'https://docs.google.com/spreadsheets/d/1nFbn1knYIjzZW6zYKCgprQDOwF43hPQWPYXd-xzqP84/edit?usp=sharing' 
  },
  {
    title: 'Inbox Summary Log',
    description: 'Organized inbox summaries and email tracking for efficient communication.',
    tags: ['Email', 'Organization', 'Logging'],
    url: 'https://docs.google.com/spreadsheets/d/1Ed8rstP3iRFjABJv-PHZamZj_AtCW_OBswmsQzPCbTo/edit?usp=sharing' 
  },
  {
    title: 'Content & Social Post Calendar',
    description: 'Visual content calendar for scheduling and managing social media posts across platforms.',
    tags: ['Social Media', 'Content', 'Calendar'],
    url: 'https://www.notion.so/Content-Social-Post-Calendar-20d3f3bb03ce8061b9b8f3bbdbad93f4?source=copy_link' 
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              {...(project.url === '#' && { onClick: (e) => e.preventDefault() })}
            >
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
