import './index.css'

const ProjectItem = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <li className="list-container">
      <img src={imageUrl} alt={name} className="project-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectItem
