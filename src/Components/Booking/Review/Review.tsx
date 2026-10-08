import axios from 'axios';
import React from 'react';

const Review = () => {

    const handleReview = (e:any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const company = e.target.company.value;
        const description = e.target.description.value;

        axios.post('https://agile-cove-82104.herokuapp.com/review', {
            name: name,
            company:company,
            description:description
        })
        .then(res => {
            e.target.reset();
            console.log(res)})
    }
    
    return (
        <div className=''>
            <form
            onSubmit={handleReview}
            className='flex flex-col max-w-xs gap-y-4'>
            <input
            name='name'
             type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs"
             required
             />
            <input
            name='company'
             type="text" placeholder="Company’s name, Designation" className="input input-bordered w-full max-w-xs"
             required 
             />
            <textarea
            name='description'
            required
            className="textarea textarea-bordered" placeholder="Description"></textarea>
            <input className='btn btn-primary w-24' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Review;