import PropTypes from 'prop-types';
import CustomButton from '../../../components/CustomButton';

const contacts = [
    {
        id: 1,
        name: "Josh",
        title: "Branch Manager",
        status: "Saved Contact",
    },
    {
        id: 2,
        name: "Emily",
        title: "Project Coordinator",
        status: "Saved Contact",
    },
    {
        id: 3,
        name: "Michael",
        title: "Sales Lead",
        status: "Saved Contact",
    },
];

const ContactListModal = ({ saveContact }) => {
    return (
        <div>
            {contacts.map((contact, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm mb-4"
                >
                    <div>
                        <p className="text-sm text-gray-500">Contact Name</p>
                        <p className="font-medium text-gray-900">{contact.name}</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-gray-500">Title</p>
                        <p className="font-medium text-gray-900">{contact.title}</p>
                    </div>
                    <CustomButton size="md" onClick={() => saveContact(contact)}>
                        {contact.status}
                    </CustomButton>
                </div>
            ))}
        </div>
    );
};

ContactListModal.propTypes = {
    saveContact: PropTypes.func.isRequired,
};

export default ContactListModal;
