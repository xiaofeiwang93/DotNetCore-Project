import React, { useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar, Select } from 'antd';
import moment from 'moment';
import axios from 'axios';
import './MessageWall.css'

export default function () {
    const { Option } = Select;
    const [data, setData] = useState([]);
    const [rentalItem, setRentalItem] = useState([]);

    //Message GetAll Api
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'api/Message/GetAll',
          );
          setData(result.data);
        };
        fetchData();
    }, []);

    //RentalItem GetAll Api
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'api/RentalItem/GetAll',
          );
          setRentalItem(result.data);
        };
        fetchData();
    }, []);

    const Messages = null;

    function handleChange(value) {
        console.log(`selected ${value}`);
        Messages = data.map(function(message){
            return <Comment
            author={<a>{message.nickName + " " + message.email + " " + "+" + message.phoneNumber}</a>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
                <p>
                    {message.messageConte}
                </p>
            }
        />
        })
    }

    if(!data){
        return null;
    }
    return (
        <div>
            <Select defaultValue="8" style={{ width: 120 }} onChange={handleChange}>
                { rentalItem.map(function(item){
                    return <Option value={item.id}>{item.id}</Option>;
                })}
            </Select>
            {Messages}
        </div>
    );
}