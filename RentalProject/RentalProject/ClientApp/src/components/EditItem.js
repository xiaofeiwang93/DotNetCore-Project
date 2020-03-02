import React, { useState, useEffect } from 'react'
import { Input, DatePicker, InputNumber, Row, Col, Button } from 'antd'
import moment from 'moment'
import axios from 'axios';
import './EditItem.css'
const { TextArea } = Input;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default function({match}) {
    const id = match.params.id;

    const [data, setData] = useState();

    //Details Api
    useEffect( async () => {
        const result = await axios(
            `api/RentalItem/Details/${id}`,
          );
        setData(result.data);
    },[]);

    function onChangeDate(date, dateString) {
        console.log(date, dateString);
    }
    
    function onChangeName(name) {
        //console.log(name);
        setData(data.name = name);
        console.log(data.name);
    }
    
      //check null here
    if(!data){
        return null;
    }
    return (
        <div className="edit-container">
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box"><h1 className="edit-title">Edit Item</h1></div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <Input placeholder="Name" defaultValue={data.name} onChange={(event)=>onChangeName(event.target.value)} size="large" />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <InputNumber
                            value={data.price}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            //onChange={onChange}
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Image Url" size="large" value={data.photoURL} autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Description" value={data.description} size="large" autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box">
                    <DatePicker value={moment(data.expiryDate)} onChange={onChangeDate} />
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
