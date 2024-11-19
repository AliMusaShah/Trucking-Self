
import PropTypes from 'prop-types';
const TextCard = ({ title, description, }) => {
    return (
        <div className={`  p-4 rounded-md`}>
            <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
            <p className="text-sm text-white">{description}</p>
        </div>
    );
}
TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default TextCard;
