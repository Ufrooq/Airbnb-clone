import React, { useEffect, useState } from 'react'
import ImgGallery from '../../../components/ImgGallery'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoaderMain from '../../../components/LoaderMain';

const BookedPlace = () => {
    const { id } = useParams();
    const [place, setplace] = useState(null);

    const getPlaceData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/booking/${id}`
            );
            // destructuring response fom server -->
            const booking = response.data;
            // console.log(response.data);
            setTimeout(() => {
                setplace(booking);
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getPlaceData();
    }, []);

    return (
        <section>
            {place ?
                <ImgGallery photos={place.photos} />
                :
                <LoaderMain />
            }
        </section>
    );
};

export default BookedPlace;