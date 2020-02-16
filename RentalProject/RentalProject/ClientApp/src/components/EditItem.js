import React from 'react'
import { Input, DatePicker, InputNumber, Row, Col, Button } from 'antd'
import './EditItem.css'
const { TextArea } = Input;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function createItem() {
    return (
        <div className="edit-container">
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box"><h1 className="edit-title">Edit Item</h1></div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <Input placeholder="Name" defaultValue="BMW M3" size="large" />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <InputNumber
                            defaultValue={50}
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
                        <TextArea placeholder="Image Url" size="large" defaultValue="https://lh3.googleusercontent.com/29FJNEMEz-fcwhVwHhR9olb9QPGIbMegwA3BL08JC3sBoCNt68s8nySZQtjlufqpB1YgO_rIpa8=w128-h128-e365" autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Description" defaultValue="BMW M3 Description Area" size="large" autoSize={{ minRows: 3 }} />
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box">
                    <DatePicker onChange={onChange} />
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
