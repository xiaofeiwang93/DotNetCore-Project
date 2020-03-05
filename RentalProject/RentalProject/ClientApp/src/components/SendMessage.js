import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Row,
    Button,
    AutoComplete,
    TextArea,
    Alert 
  } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option; 

class sendMessageForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);

                const ItemId = this.props.match.params.id;
                const Email = values.email;
                const NickName = values.nickname;
                const PhoneNumber = values.prefix + values.phone;
                const MessageContent = values.message;

                const params = new URLSearchParams();
                params.append('ItemId', ItemId);
                params.append('Email', Email);
                params.append('NickName', NickName);
                params.append('PhoneNumber', PhoneNumber);
                params.append('MessageContent', MessageContent);

                axios({
                    method: 'post',
                    url: 'api/Message/Create',
                    data: params
                  }).then(function (response) {
                    //console.log(response);
                    debugger;
                    this.props.push("/");
                  })
                  .catch(function (error) {
                    //console.log(error);
                    return <Alert
                    message="Error"
                    description={error}
                    type="error"
                    showIcon
                  />
                  });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const { TextArea } = Input; 

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '64',
          })(
            <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="64">+64</Option>
            </Select>,
          );
      
          const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));

        return (
            <div>
                <Row type="flex" justify="center"  >
                    <div className="gutter-box"><h1>Send a Message</h1></div>
                </Row>
                <Row type="flex" justify="center">
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                            ],
                        })(<Input />)}
                        </Form.Item>
                        <Form.Item
                        label={
                            <span>
                            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                        })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item label="Message">
                            {getFieldDecorator('message', {
                                rules: [{ required: true, message: 'Tell us something!' }],
                            })(<TextArea style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                SEND
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </div>
    );
    }
}

const WrappedsendMessageForm = Form.create({ name: 'contact' })(sendMessageForm);

export default WrappedsendMessageForm; 