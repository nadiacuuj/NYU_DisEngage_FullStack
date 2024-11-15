import React, { useState } from 'react';
import { format } from 'date-fns';
import './EventCard.css'; // Import the external CSS file

function EventCard({ event }) {
    const [isExpanded, setIsExpanded] = useState(false); // State to track if the card is expanded

    // Function to toggle expansion when the card is clicked
    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const date = new Date(event.startTime);
    const formattedDate = format(date, "MMMM do, yyyy, hh:mm a");

    return (
        <div 
            // The main container for the event card
            // `hover:shadow-2xl` applies the hover effect, making the shadow larger when hovered
            // `onClick={handleToggleExpand}` allows the card to expand to fullscreen when clicked
            className={`w-[333.13px] h-fit shadow-md hover:shadow-2xl border overflow-hidden bg-slate-100 rounded-lg ${isExpanded ? 'expanded' : ''}`}
            onClick={handleToggleExpand}
        >
            <img className="object-cover h-40 w-full" src="https://meet.nyu.edu/wp-content/uploads/2023/03/22-0531_NYU_125-1-scaled.jpg" alt="Event image" />
            <div className='w-full'>
                <p className="font-geist_regular text-lg leading-tight p-2 m-2 max-w-[331px] break-words">{event.name}</p>
                <p className="font-geist_regular text-sm px-2 mx-2">{event.venue}</p>
                <p className="font-geist_regular text-sm px-2 mx-2 pb-2 mb-2">{formattedDate}</p>
            </div>
            
            {/* This section is conditionally rendered only if the card is expanded */}
            {isExpanded && (
                <div className="expanded-content">
                    {/* Additional content displayed when expanded */}
                    <p className="text-base p-4">{event.description}</p>
                    
                    {/* Close button to collapse the expanded view when clicked */}
                    <button onClick={handleToggleExpand} className="close-button">Close</button>
                </div>
            )}
        </div>
    );
}

export default EventCard;