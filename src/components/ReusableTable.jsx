import PropTypes from 'prop-types';

const ReusableTable = ({ columns, data, onClick }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {columns.map((column, index) => (
                            <th key={index} className="p-4 border-b-2 border-gray-200">{column.header} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data?.map((row, index) => (
                        <tr onClick={onClick} key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="p-4 border-b border-gray-200">
                                    {column.render ? column.render(row) : row[column.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ReusableTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            accessor: PropTypes.string,
            render: PropTypes.func
        })
    ).isRequired,
    data: PropTypes.array,
    onClick: PropTypes.func
};

export default ReusableTable;
