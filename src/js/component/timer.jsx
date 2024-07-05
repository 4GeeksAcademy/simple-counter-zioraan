import React from 'react'

export default function Timer(props) {
    return (
        <div className="bigCounter d-flex w-50 h-50 container bg-black justify-content-around mt-3 p-1">
            <div className='bg-secondary d-flex justify-content-around container'>
                <div className="calendar bg-secondary">
                    <i className="far fa-clock"></i>
                </div>
                <div className="four bg-secondary">{props.digitFour % 10}</div>
                <div className="three bg-secondary">{props.digitThree % 10}</div>
                <div className="two bg-secondary">{props.digitTwo % 10}</div>
                <div className="one bg-secondary">{props.digitOne % 10}</div>
            </div>
        </div>
    )
}
