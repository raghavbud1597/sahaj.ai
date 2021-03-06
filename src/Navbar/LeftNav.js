import React from 'react';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import Email from './../images/email.png';
import ExpandedLeftNav from './ExpandedLeftNav';
import BarChart from './../images/bar-chart.png';
import PieChart from './../images/pie-chart.png';
import Block from './../images/blocks.png';
import Test from './../images/test.png';
import Desktop from './../images/desktop.png';
import Worldwide from './../images/worldwide.png';

const NavBar = styled(Nav)`
    background-color: #2E4050;
`
const NavLink = styled.div`
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    &:hover{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }

    &.active{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }
`
const NavBanner = styled.div`
    background-color: #243846;
    color: $white;
    padding 10px;
    width:100%;
    text-align: center;
`

export default function LeftNav({
    expandLeftNav
}) {
    return expandLeftNav ? <ExpandedLeftNav/> : (
        <NavBar className="flex-column h-100 align-items-center">
            <NavBanner className="text-white py-3">
                <h3>IN+</h3>
            </NavBanner>
            <NavLink>
                <img src={BarChart} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink>
                <img src={PieChart} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink >
                <img src={Block} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink className="active">
                <img src={Email} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink>
                <img src={Worldwide} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink>
                <img src={Desktop} alt="Message Icon" height="20" width="20"/>
            </NavLink>
            <NavLink>
                <img src={Test} alt="Message Icon" height="20" width="20"/>
            </NavLink>
        </NavBar>
    )
}
