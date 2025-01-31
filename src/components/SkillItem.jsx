import PropTypes from 'prop-types';

export default function SkillItem({ skillLogo, skillTitle, skillDescription }) {
  return (
    <div className="flex items-center gap-3">
      <img src={skillLogo} alt="Skill" />
      <div className='space-y-0.5'>
        <p className="font-semibold">{skillTitle}</p>
        <p className='text-xs'>{skillDescription}</p>
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  skillLogo: PropTypes.string.isRequired,
  skillTitle: PropTypes.string.isRequired,
  skillDescription: PropTypes.string.isRequired,
};