import React from 'react';

import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactMe from './ContactMe/ContactMe';
import Doctors from './Doctors/Doctors';
import Gift from './Gift/Gift';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';



const HomePage = () => {

    return (
        <div>
        <Banner />
        <Services />
        <Treatment/>
        <Gift/>
        <Doctors/>
        <Blogs/>
        <Testimonial/>
        <ContactMe/>
        <Footer/>
        </div>
    );
};

export default HomePage;