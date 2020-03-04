import React, { useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar, Select } from 'antd';
import axios from 'axios';
import './MessageWall.css'

export default function () {
    const { Option } = Select;
    const [data, setData] = useState([]);
    const [rentalItem, setRentalItem] = useState([]);
    const [messages, setMessages] = useState();   

    //Message GetAll Api
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'api/Message/GetAll',
          );
          setData(result.data);
        };
        fetchData();

        const fetchId = async () => {
            const result = await axios(
              'api/RentalItem/GetAll',
            );
            setRentalItem(result.data);
          };
          fetchId();
    }, []);

    useEffect(()=>{
        debugger
        setMessages(data.map(function(message){
            return <Comment
            key={message.id}
            author={<a>{message.nickName + " " + message.email + " " + "+" + message.phoneNumber}</a>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
                <p>
                    {message.messageContent}
                </p>
            }
        />
        }))
    },[data]);

    function handleChange(value) {
        console.log(`selected ${value}`);
        var msgArrary = [];
        for (var i = 0; i < data.length; i++){
            if (data[i].itemId == value){
                msgArrary.push(data[i]);
            }
        };
        if (msgArrary.length > 0) {
            setMessages(msgArrary.map(function(message){
                return <Comment
                key={message.id}
                author={<a>{message.nickName + " " + message.email + " " + "+" + message.phoneNumber}</a>}
                avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                }
                content={
                    <p>
                        {message.messageContent}
                    </p>
                }
            />
            }))
        }
        else{
            setMessages(
                () => {
                    return <p>There is no message for this itme yet</p>
                }
            )
        }
    }

    if(!data){
        return null;
    }
    return (
        <div>
            <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
                { rentalItem.map(function(item){
                    return <Option value={item.id}>{item.id}</Option>;
                })}
            </Select>
            {messages}
        </div>
    );
}