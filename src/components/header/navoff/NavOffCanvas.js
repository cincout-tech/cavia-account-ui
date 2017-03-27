/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';

export default class NavOffCanvas extends React.Component {
    render() {
        return (
            <div id="offcanvas" className="uk-offcanvas">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-offcanvas">
                        <li className="uk-active">
                            <a href="layouts_frontpage.html">首页</a>
                        </li>
                        <li>
                            <a href="layouts_portfolio.html">Portfolio</a>
                        </li>
                        <li>
                            <a href="layouts_blog.html">Blog</a>
                        </li>
                        <li className="uk-parent" data-uk-dropdown>
                            <a href="#parent">Parent</a>
                            <div className="uk-dropdown uk-dropdown-navbar">
                                <ul className="uk-nav uk-nav-navbar">
                                    <li><a href="#">Item</a></li>
                                    <li className="uk-nav-header">Header</li>
                                    <li><a href="#">Item</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="layouts_contact.html">Contact</a>
                        </li>
                        <li>
                            <a href="layouts_login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}