import React from 'react';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: 'astronomy', label: 'Astronomy' },
    { value: 'bird watching', label: 'Bird Watching' },
    { value: 'camping', label: 'Camping' },
    { value: 'coding', label: 'Coding' },
    { value: 'collecting coins', label: 'Collecting Coins' },
    { value: 'collecting stamps', label: 'Collecting Stamps' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'dancing', label: 'Dancing' },
    { value: 'drawing', label: 'Drawing' },
    { value: 'fishing', label: 'Fishing' },
    { value: 'gardening', label: 'Gardening' },
    { value: 'golfing', label: 'Golfing' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'karaoke', label: 'Karaoke' },
    { value: 'knitting', label: 'Knitting' },
    { value: 'meditation', label: 'Meditation' },
    { value: 'model building', label: 'Model Building' },
    { value: 'painting', label: 'Painting' },
    { value: 'photography', label: 'Photography' },
    { value: 'playing badminton', label: 'Playing Badminton' },
    { value: 'playing basketball', label: 'Playing Basketball' },
    { value: 'playing board games', label: 'Playing Board Games' },
    { value: 'playing chess', label: 'Playing Chess' },
    { value: 'playing drums', label: 'Playing Drums' },
    { value: 'playing golf', label: 'Playing Golf' },
    { value: 'playing guitar', label: 'Playing Guitar' },
    { value: 'playing piano', label: 'Playing Piano' },
    { value: 'playing table tennis', label: 'Playing Table Tennis' },
    { value: 'playing tennis', label: 'Playing Tennis' },
    { value: 'playing the flute', label: 'Playing the Flute' },
    { value: 'playing the saxophone', label: 'Playing the Saxophone' },
    { value: 'playing ukulele', label: 'Playing Ukulele' },
    { value: 'playing video games', label: 'Playing Video Games' },
    { value: 'reading', label: 'Reading' },
    { value: 'rock climbing', label: 'Rock Climbing' },
    { value: 'singing', label: 'Singing' },
    { value: 'skiing', label: 'Skiing' },
    { value: 'skydiving', label: 'Skydiving' },
    { value: 'sculpting', label: 'Sculpting' },
    { value: 'surfing', label: 'Surfing' },
    { value: 'swimming', label: 'Swimming' },
    { value: 'traveling', label: 'Traveling' },
    { value: 'volunteering', label: 'Volunteering' },
    { value: 'watching movies', label: 'Watching Movies' },
    { value: 'woodworking', label: 'Woodworking' },
    { value: 'writing', label: 'Writing' },
    { value: 'writing poetry', label: 'Writing Poetry' },
    { value: 'yoga', label: 'Yoga' },
];



const animatedComponents = makeAnimated();

function Hobby(props) {
    const handleSubmit = () => {
        console.log('Submitted');
    };

    return (
        <div className='flex flex-col items-center mt-20'>
            <span>Select Your Hobby/Hobbies:</span>
            <CreatableSelect
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                className='w-60'
            />
                <button className='mt-4' onClick={handleSubmit}>
                    Submit
                </button>
        </div>
    );
}

export default Hobby;