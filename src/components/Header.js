import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Weather Boy</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#currently">Now</a></li>
                        <li className="tab"><a href="#weekly">All Day</a></li>
                        <li className="tab"><a href="#weekly">This Week</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;




// const DAYS = [
//     { label: 'day0', value: dayFunc(0), href: '#day0' },
//     { label: 'day1', value: dayFunc(1), href: '#day1' },
//     { label: 'day2', value: dayFunc(2), href: '#day2' },
//     { label: 'day3', value: dayFunc(3), href: '#day3' },
//     { label: 'day4', value: dayFunc(4), href: '#day4' }

// ];

// function dayFunc(num) {
//     var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
//     return weekdays[new Date().getDay() + num]
// }

// function renderDays() {
//     return _.map(DAYS, ({ label, value, href }) => {
//         return (
//             <li key={label} className="tab"><a href={href}>{value}</a></li>
//         )
//     })
// }