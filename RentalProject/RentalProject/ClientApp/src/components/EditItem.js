import React, { useState, useEffect } from 'react'
import { Input, DatePicker, InputNumber, Row, Col, Button } from 'antd'
import moment from 'moment'
import axios from 'axios';
import './EditItem.css'
const { TextArea } = Input;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function({match}) {
    const id = match.params.id;
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [des, setDes] = useState();
    const [date, setDate] = useState();

    // const [data, setData] = useState();

    //Details Api
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `api/RentalItem/Details/${id}`,
          );
        //   setData(result.data);
        //   console.log(data.name)
          setName(result.data.name);
          setPrice(result.data.price);
          setImg(result.data.photoURL);
          setDes(result.data.description);
          setDate(result.data.expiryDate);
        };
        fetchData();
      }, []);

    return (
        <div className="edit-container">
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box"><h1 className="edit-title">Edit Item</h1></div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <Input placeholder="Name" value={name} size="large" />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <InputNumber
                            value={price}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={onChange}
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Image Url" size="large" value={img} autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Description" value={des} size="large" autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box">
                    <DatePicker value={moment(date)} onChange={onChange} />
                </div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]} style={{ marginTop: "12px" }}>
                <div className="gutter-box" >
                    <Button type="primary">Submit</Button>
                </div>
            </Row>
        </div>
    )
}
