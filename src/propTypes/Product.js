import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/EAP.jpg'

const Product = ({image, name, price}) => {
    /* Smart shourt circuit. If the image is the, we use the image url. If not, the default  image will be rendered*/
    const url = image && image.url;
    return (
        <>
            <article className='product'>
                <img src={url || defaultImage} alt={name}/>
                <h4> {name} </h4>
                <p>${price || 69.69}</p>
            </article>
        </>
    );

};
Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
/*
Product.defaultProps = {
    image: defaultImage,
    name: 'some shit',
    price: 69.69
};
 */
export default Product;