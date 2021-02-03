import React from 'react';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import Email from './../images/email.png';
import Profile from './../images/profile.jpeg'

const NavBar = styled(Nav)`
    background-color: #2E4050;
`
const NavLink = styled.div`
    padding: 20px 0px;
    width: 100%;
    &:hover{
        background-color: #243846;
        border-left: 4px solid #008E74;
        cursor: pointer;
    }

    &.active{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }
    div{
        div{
            color: #6c757d;
            &:hover{
                color: #fff;
                cursor: pointer;
            }
            &.active{
                color: #fff;
                cursor: pointer;
            }
        }
    }
`
const NavBanner = styled.div`
    background-color: #243846;
    color: $white;
    padding 10px;
    width:100%;
`

export default function ExpandedLeftNav() {
    return (
        <NavBar className="flex-column h-100 text-white">
            <NavBanner className="text-white py-3 px-5">
                <img src={Profile} alt="Profile Image" height="70" width="70" className="rounded-circle overflow-hidden"/>
                <h3>Anna Smith</h3>
                <p className="text-muted">Art Director</p>
            </NavBanner>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Dashboard
            </NavLink>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Layouts
            </NavLink>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Graphs
            </NavLink>
            <NavLink className="active px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                MailBox
                <div className="pl-4 pt-2">
                    <div className="active">Inbox</div>
                    <div>Email View</div>
                    <div>Compose Email</div>
                    <div>Email Templates</div>
                </div>
            </NavLink>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Matrices
            </NavLink>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Widget
            </NavLink>
            <NavLink className="px-5">
                <img src={Email} alt="Message Icon" height="20" width="20" className="mr-2"/>
                Forms
            </NavLink>
        </NavBar>
    )
}
