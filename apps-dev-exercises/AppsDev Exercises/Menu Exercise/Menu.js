import React, {useState} from 'react'
import data from './data'

const MenuExercise = () => {
    const categories = ['all',...new Set(data.map((items) => items.category))];
    const [selected, setSelected] = useState('all');
    const displayItems = (selected === 'all') ? data : data.filter(items => items.category === selected);
    
    return (
        <>
            <div className="header">
                <h1>Our Menu</h1>
                <div className="underline"></div>
            </div>
            <div className="button-container">
                {
                    categories.map((item, index) => {
                        return (
                            <>
                                <button 
                                    key = {item.index} 
                                    onClick = {() => setSelected(item)}
                                    className={`category-button ${item === selected && 'selected-category'}`} 
                                >{item}</button>
                            </>
                        )
                    })
                }
            </div>
            <div className="content-container">
                {
                    displayItems.map((product, index) => {
                        const {id, title, category, price, img, desc} = product;
                        return (
                            <>
                                <div className="item-wrapper">
                                    <div className="product-box">
                                        <img src={img} alt="img" id="image-box" />
                                        <div className="info-box">
                                            <div className="info-header">
                                                <h5 className="product-name">{title}</h5>
                                                <label htmlFor="" id="product-price">${price}</label>
                                            </div>
                                            <p id="description">{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MenuExercise;