import React, { useState } from 'react'

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons'
const icon = (slug, size = 24) => `${CDN}/${slug}.svg`

// Google Workspace main icon (Google "G" logo)
const GoogleWorkspaceIcon = () => (
  <img src={icon('google')} alt="Google Workspace" className="skill-icon skill-icon-lg" width={32} height={32} loading="lazy" />
)

// Microsoft Office main icon (4 squares)
const MicrosoftOfficeIcon = () => (
  <img src={icon('microsoft')} alt="Microsoft Office" className="skill-icon skill-icon-lg" width={32} height={32} loading="lazy" />
)

const googleTools = [
  { slug: 'gmail', label: 'Gmail' },
  { slug: 'googledocs', label: 'Docs' },
  { slug: 'googlesheets', label: 'Sheets' },
  { slug: 'googleslides', label: 'Slides' },
  { slug: 'googledrive', label: 'Drive' },
  { slug: 'googlecalendar', label: 'Calendar' },
  { slug: 'googlemeet', label: 'Meet' }
]

const microsoftTools = [
  { slug: 'microsoftword', label: 'Word' },
  { slug: 'microsoftexcel', label: 'Excel' },
  { slug: 'microsoftpowerpoint', label: 'PowerPoint' },
  { slug: 'microsoftoutlook', label: 'Outlook' },
  { slug: 'microsoftteams', label: 'Teams' }
]

const otherTools = [
  { slug: 'canva', label: 'Canva' },
  { slug: 'notion', label: 'Notion' },
  { slug: 'openai', label: 'ChatGPT' },
  { slug: 'googlegemini', label: 'Gemini' },
  { slug: 'slack', label: 'Slack' },
  { slug: 'anthropic', label: 'Claude' }
]

function SkillIcon({ slug, alt, size = 24 }) {
  return (
    <img
      src={icon(slug)}
      alt={alt}
      className="skill-icon"
      width={size}
      height={size}
      loading="lazy"
    />
  )
}

export default function Skills() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-glass-card">
        <div className="skills-tools">
          <div className="skills-tool-wrapper">
            <span className="skills-tool">
              <GoogleWorkspaceIcon />
              <span className="skills-tool-label">Google Workspace</span>
            </span>
            <div className="skills-tooltip skills-tooltip-google">
              <div className="skills-tooltip-grid">
                {googleTools.map(({ slug, label }) => (
                  <span key={label} className="skills-tooltip-item">
                    <SkillIcon slug={slug} alt={label} size={22} />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="skills-tool-wrapper">
            <span className="skills-tool">
              <MicrosoftOfficeIcon />
              <span className="skills-tool-label">Microsoft Office</span>
            </span>
            <div className="skills-tooltip skills-tooltip-microsoft">
              <div className="skills-tooltip-grid">
                {microsoftTools.map(({ slug, label }) => (
                  <span key={label} className="skills-tooltip-item">
                    <SkillIcon slug={slug} alt={label} size={22} />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className={`skills-expand ${expanded ? 'expanded' : ''}`}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? 'Hide more skills' : 'Show more skills'}
          >
            +
          </button>
        </div>
        {expanded && (
          <div className="skills-more">
            {otherTools.map(({ slug, label }) => (
              <span key={label} className="skills-more-item">
                <SkillIcon slug={slug} alt={label} size={22} />
                <span>{label}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
