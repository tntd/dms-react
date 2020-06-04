import React from 'react';
import { saveToLocal } from '../util';
import { logoImage, navImagesMap } from '../img';
import './index.less';

const navList = [
    {
        name: "home",
        title: "首页",
        icon: navImagesMap.home
    },
    {
        name: "columns",
        title: "结构",
        icon: navImagesMap.columns
    },
    {
        name: "content",
        title: "内容",
        icon: navImagesMap.content
    },
    {
        name: "relations",
        title: "关系",
        icon: navImagesMap.relations
    },
    {
        name: "triggers",
        title: "触发器",
        icon: navImagesMap.triggers
    },
    {
        name: "info",
        title: "信息",
        icon: navImagesMap.info
    },
    {
        name: "query",
        title: "SQL窗口",
        icon: navImagesMap.query
    }
];

export default props => {
    const { selectNav, setSelectNav, title } = props;
    const onSelect = ({ name }) => {
        setSelectNav(name)
        saveToLocal('selectNav', name);
    };

    return (
        <div className="dms-page-header">
            <div className="logo">
                <img src={logoImage} alt="dms logo" />
                <h3>
                    {title}
                    <span><em>v 0.0.1</em></span>
                </h3>
            </div>
            <div className="nav">
                {
                    navList.map((item, index) => (
                        <a
                            key={index}
                            onClick={() => onSelect(item)}
                            className={selectNav === item.name ? "active" : ""}
                        >
                            <img src={item.icon} alt={item.name} />
                            <span>
                                {item.title}
                            </span>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};
