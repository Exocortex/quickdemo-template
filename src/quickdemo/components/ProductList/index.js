import React from 'react';
import './Product.css';
import 'antd/dist/antd.css';
import {Icon, Card, List, Layout} from 'antd';
import {isBrowser, isMobile} from "react-device-detect";
import {Link} from 'react-router-dom';
import {ProductList} from '../../config/Configs.js'
import ReactGA from 'react-ga';

const productIds = [];
for(var i in ProductList){
    productIds.push(i);
}

class Products extends React.Component {
    
    
    render (){
        ReactGA.initialize("UA-63905846-9");
        ReactGA.set({ dimension1: "Quickdemo" });
        ReactGA.pageview("Landing Page");
        return (
            <div id="product-content">
                <List grid={{ xs: 1,sm: 2,md: 3,lg: 4,xl: 5,xxl: 5 }} dataSource={productIds} renderItem={item =>(
                    <Link to={"/product/" + item}>
                    <List.Item>
                            <Card 
                                cover={<img style={{maxHeight:200, width:(isMobile ? "auto" : "auto"), marginLeft:"auto", marginRight:"auto"}} src={ProductList[item].imageURL}></img>}
                            >
                                 <Card.Meta
                                    title={ProductList[item].name}
                                    description={ProductList[item].brand}
                                />
                            </Card>
                    </List.Item>
                    </Link>)
                    }>
                </List>
                </div>  
        );
    }
}

export default Products;