import PropTypes from "prop-types";

export default function ToolItem({ img, name, key }) {
	return (
		<div
			key={key}
			className="flex items-center gap-2 px-3 py-1.5 border-[0.1px] border-primary-gray rounded w-fit hover:border-primary-white transition duration-200"
		>
			<img src={img} alt={`${name} logo`} className="h-4" />
			<p className="dark:font-light text-sm">{name}</p>
		</div>
	);
}

ToolItem.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	key: PropTypes.string,
};
