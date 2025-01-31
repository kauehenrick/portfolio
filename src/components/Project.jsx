import PropTypes from 'prop-types';

export default function Project({ ProjectTitle, ProjectSubtitle, ProjectDescription, ProjectImage, ProjectLink, ProjectRow }) {
  return (
    <section className={`flex ${ProjectRow} w-8/12 h-[300px] rounded-lg p-5 drop-shadow-lg gap-2`}>
      <img src={ProjectImage} alt="Imagem referente ao projeto" className='w-[450px] border-[0.25px] border-gray-300/10 rounded-lg object-cover' />
      <div className='space-y-2 border-[0.25px] border-gray-300/10 rounded-lg p-5'>
        <p className='text-lg font-semibold'>{ProjectTitle}</p>
        <p className='text-sm'>{ProjectSubtitle}</p>
        <p className='text-xs'>{ProjectDescription}</p>
        <p>{ProjectLink}</p>
      </div>
    </section>
  )
}

Project.propTypes = {
  ProjectTitle: PropTypes.string.isRequired,
  ProjectSubtitle: PropTypes.string.isRequired,
  ProjectDescription: PropTypes.string.isRequired,
  ProjectImage: PropTypes.string.isRequired,
  ProjectLink: PropTypes.string,
  ProjectRow: PropTypes.object,
}

Project.defaultProps = {
  ProjectTitle: "Projeto Teste",
  ProjectSubtitle: "Lorem Ipsum",
  ProjectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  ProjectImage: "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/cicero_gradient.png?strip=all&lossy=1&ssl=1",
  ProjectLink: "",
  ProjectRow: "flex-row",
}