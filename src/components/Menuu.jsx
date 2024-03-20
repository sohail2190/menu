import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Menu = ({ items }) => {
    return (
        <div className='section-center'>
            {
                items.map((menuItem) => {
                    const { id, title, price, image, desc } = menuItem;

                    return (
                        <div className="menu-item" key={id}>
                            <img src={image} alt={title} className='photo' />

                            <div className="item-info">
                                <header>
                                    <h4> {title} </h4>
                                    <h4 className='price'> ${price} </h4>
                                </header>
                                <p className='item-text'> {desc} </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    })).isRequired
};

export default Menu;
