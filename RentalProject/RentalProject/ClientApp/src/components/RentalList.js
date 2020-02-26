import styles from './RentalList.css';
import { Row, Col, Table, Divider, Tag, Button, Popconfirm, Icon } from 'antd';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
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
            dataIndex: 'photoURL',
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
            dataIndex: 'expiryDate',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <span>
                    <Button onClick={()=>console.log(record)} type="primary">SEND A MESSAGE</Button>
                </span>
            ),
        },
        {
            title: 'Edit',
            key: 'edit',
            align: 'center',
            render: (text, record) => (
                <span>
                    {/* <Button onClick={event => document.location.href = '/EditItem/' + record.id} type="primary">Edit</Button> */}
                    <Button href={`/EditItem/${record.id}`} type="primary">Edit</Button>
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

    const [data, setData] = useState([]);

    //GetAll Api
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'api/RentalItem/GetAll',
          );
          setData(result.data);
        };
        fetchData();
    }, []);

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
