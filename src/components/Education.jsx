import React from 'react'

const education = [
  {
    degree: 'Bachelor Of Science In Computer Science',
    status: '3rd Year Student',
    school: 'Father Saturnino Urios University',
    period: '2023-Present'
  },
  {
    degree: 'Science, Technology, Mathematics and Engineering (STEM)',
    school: 'Agusan National High School',
    period: '2017 - 2023'
  }
]

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item) => (
          <article key={item.school} className="education-item">
            <h3 className="education-degree">{item.degree}</h3>
            {item.status && (
              <p className="education-status">({item.status})</p>
            )}
            <p className="education-school">{item.school}</p>
            <p className="education-period">{item.period}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
