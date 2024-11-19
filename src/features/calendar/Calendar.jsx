import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // For week view
import './components/styles.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import CustomModal from '../../components/CustomModal';
import AddEventForm from './components/AddEventForm';
import CompanyEventDetail from './components/CompanyEventDetail';

const Calendar = () => {
    const [view, setView] = useState(location.pathname === '/calendar/weekly' ? 'timeGridWeek' : 'dayGridMonth');
    const [viewModal, setViewModal] = useState(false);
    const handleModal = () => setViewModal(!viewModal);
    const closeModal = () => setViewModal(!viewModal);



    const calendarRef = useRef(null);

    const { pathname } = useLocation()
    console.log(pathname)
    // const handleDateClick = (arg) => {
    //     alert(arg.dateStr)
    // }
    useEffect(() => {
        const newView = location.pathname === '/calendar/weekly' ? 'timeGridWeek' : 'dayGridMonth';
        setView(newView);

        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            calendarApi.changeView(newView);
        }
    }, [pathname]);
    return (
        <>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView={view}

                headerToolbar={{
                    left: 'prev title next', // Buttons on the left
                    center: '', // Empty center section
                    right: 'customButton', // Empty right section
                }}
                customButtons={{
                    customButton: {
                        text: 'Add New Event', // Button label
                        click: () => handleModal(), // Action on click
                    },
                }}
                // dateClick={handleDateClick}
                events={[
                    { title: 'Event 1', date: '2024-11-19', },
                    { title: 'Event 2', date: '2024-11-20' },
                ]}
            />


            <CustomModal
                title='Create New Event'
                isOpen={viewModal}
                onClose={closeModal}
            >
                <AddEventForm />
            </CustomModal>
            {/* <CustomModal
                title='Company'
                isOpen={viewModal}
                onClose={closeModal}
            >
                <CompanyEventDetail />
            </CustomModal> */}
        </>
    )
}

export default Calendar