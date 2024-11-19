import PropTypes from 'prop-types';
import { useFormik } from 'formik';
const options = [
    { value: '25 Miles', label: '25 Miles' },
    { value: '50 Miles', label: '50 Miles' },
    { value: '75 Miles', label: '75 Miles' },
];

const SearchSelect = ({ Icon, className, placeholder, iconColor }) => {
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        validateOnChange: true,
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        console.log('Search value changed:', e.target.value); // Log value on change
    };

    return (
        <div className="w-1/4">
            <form className="flex items-center p-2">
                <div className='relative w-full'>
                    <Icon className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-${iconColor}`} />
                    <select
                        name="query"
                        value={formik.values.query}
                        onChange={handleChange} // Handle onChange
                        onBlur={formik.handleBlur}
                        className={className}
                    >
                        <option value="" disabled>{placeholder}</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
};
SearchSelect.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    iconColor: PropTypes.string,
};
export default SearchSelect;
