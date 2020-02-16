import styles from './RentalList.css';
import { Row, Col, Table, Divider, Tag, Button, Popconfirm, Icon } from 'antd';
import React from 'react'
import EditItem from './EditItem'
//import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    Link,
//    useParams,
//    Redirect
//} from "react-router-dom";

// function editItem(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
//   <Redirect to={EditItem}/>
// }

export default function () {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            align: 'center',
            render: (record) => {
                return <img src={record} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            }
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description',
            align: 'center',
        },
        {
            title: 'Expiry',
            key: 'expiry',
            dataIndex: 'expiry',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <span>
                    <Button onClick={event => document.location.href = '/sendMessage'} type="primary">SEND A MESSAGE</Button>
                </span>
            ),
        },
        {
            title: 'Edit',
            key: 'edit',
            align: 'center',
            render: (text, record) => (
                <span>
                    <Button onClick={event => document.location.href = '/EditItem'} type="primary">Edit</Button>
                </span>
            ),
        },
        {
            title: 'Delete',
            key: 'delete',
            align: 'center',
            render: (text, record) => (
                <span>
                    <Popconfirm
                        title="Are you sure？"
                        icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                    >
                        <Button type="primary">Delete</Button>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'CD',
            price: 50,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/CD-ROM.png',
            description: 'Black',
            expiry: '2019-01-01',
        },
        {
            key: '2',
            name: 'Mobile Phone',
            price: 200,
            photo: 'https://static.macupdate.com/products/15113/l/phonedirector-for-nokia-logo.png?v=1568296774',
            description: 'Black',
            expiry: '2019-01-01',
        },
        {
            key: '800',
            name: 'BMW M3',
            price: 50,
            photo: 'https://lh3.googleusercontent.com/29FJNEMEz-fcwhVwHhR9olb9QPGIbMegwA3BL08JC3sBoCNt68s8nySZQtjlufqpB1YgO_rIpa8=w128-h128-e365',
            description: 'Black',
            expiry: '2019-01-01',
        },
        {
            key: '4',
            name: 'MacBook',
            price: 100,
            photo: 'https://mingersoft.com/blog/wp-content/uploads/2012/10/Apple-Logo.png',
            description: 'Black',
            expiry: '2019-01-01',
        },
        {
            key: '5',
            name: 'MacBook',
            price: 100,
            photo: 'https://mingersoft.com/blog/wp-content/uploads/2012/10/Apple-Logo.png',
            description: 'Black',
            expiry: '2019-01-01',
        },
    ];

    return (
        <div className={styles.normal}>
            <Row gutter={16}>
                <Col span={16}>
                    <img alt="" src='https://s2.best-wallpaper.net/wallpaper/3840x1200/1607/Fostla-BMW-M3-E92-coupe-side-view_3840x1200.jpg'
                        style={{ width: '100%', height: '60%' }}
                    />
                </Col>
                <Col span={8}>
                    <div className="gutter-box">
                        <h1>RenTal</h1>
                        <p>Enjoy the total piece of mind knowing your rental property is in the best hands</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24} className='table-title'>
                    <h1>Item List</h1>
                </Col>
                <Table pagination={false} columns={columns} dataSource={data} />
            </Row>
        </div>
    );
}
