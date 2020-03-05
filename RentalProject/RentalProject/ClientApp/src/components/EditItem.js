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
    
    const[newName, setNewName] = useState();
    const[newPrice, setNewPrice] = useState();
    const[newPhotoUrl, setNewPhotoUrl] = useState();
    const[newDescription, setNewDescription] = useState();
    const[newExpiryDate, setNewExpiryDate] = useState();

    function handleSubmit(){
        const name = newName == null? data.name : newName;
        const price = newPrice == null? data.price : newPrice;
        const photoURL = newPhotoUrl == null? data.photoURL : newPhotoUrl;
        const description = newDescription == null? data.description : newDescription;
        const expiryDate = newExpiryDate == null? data.expiryDate : newExpiryDate;

        const params = new URLSearchParams();
        params.append('Id', id);
        params.append('Name', name);
        params.append('Price', price);
        params.append('PhotoURL', photoURL);
        params.append('Description', description);
        params.append('ExpiryDate', expiryDate);

        axios({
            method: 'put',
            url: 'api/RentalItem/Edit',
            data: params
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    //Details Api
    useEffect( async () => {
        const result = await axios(
            `api/RentalItem/Details/${id}`,
          );
        setData(result.data);
    },[]);
    
    function onChangeName(name) {
        setNewName(name)
    }

    function onChangePrice(price) {
        setNewPrice(price)
    }

    function onChangeURL(url) {
        setNewPhotoUrl(url)
    }

    function onChangeDescription(description) {
        setNewDescription(description);
    }

    function onChangeDate(date, dateString) {
        setNewExpiryDate(dateString);
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
                            onChange={onChangePrice}
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Image Url" onChange={(event)=>onChangeURL(event.target.value)} size="large" defaultValue={data.photoURL} autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Description" onChange={(event)=>onChangeDescription(event.target.value)} defaultValue={data.description} size="large" autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box">
                    <DatePicker defaultValue={moment(data.expiryDate)} onChange={onChangeDate} />
                </div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]} style={{ marginTop: "12px" }}>
                <div className="gutter-box" >
                    <Button onClick={handleSubmit} type="primary">Submit</Button>
                </div>
            </Row>
        </div>
    )
}
