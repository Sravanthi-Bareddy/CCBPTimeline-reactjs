import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <div className="projectcard-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="projecttitle-and-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div className="projectdescription">
        <p>{description}</p>
      </div>
      <a className="visitlink" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
