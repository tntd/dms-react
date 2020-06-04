import React, { Fragment } from "react";
import { saveToLocal } from "./util";
import logo from "./img/dms-logo.svg";

export default props => {
    const { selectNav, setSelectNav, title } = props;

    const navList = [
        {
            name: "home",
            title: "首页",
            icon: require("./img/nav/home.svg")
        },
        {
            name: "structure",
            title: "结构",
            icon: require("./img/nav/structure.svg")
        },
        {
            name: "content",
            title: "内容",
            icon: require("./img/nav/content.svg")
        },
        {
            name: "relations",
            title: "关系",
            icon: require("./img/nav/relations.svg")
        },
        {
            name: "triggers",
            title: "触发器",
            icon: require("./img/nav/triggers.svg")
        },
        {
            name: "info",
            title: "信息",
            icon: require("./img/nav/info.svg")
        },
        {
            name: "query",
            title: "SQL窗口",
            icon: require("./img/nav/query.svg")
        }
    ];

    return (
        <Fragment>
            <div className="logo">
                <img src={logo} alt="dms logo" />
                <h3>
                    {title}
                    <span><em>v 0.0.1</em></span>
                </h3>
            </div>
            <div className="nav">
                {
                    navList.map((item, index) => {
                        return (
                            <a
                                key={index}
                                onClick={() => {
                                    setSelectNav(item.name)
                                    saveToLocal("selectNav", item.name);
                                }}
                                className={selectNav === item.name ? "active" : ""}
                            >
                                <img src={item.icon} />
                                <span>
                                    {item.title}
                                </span>
                            </a>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};
