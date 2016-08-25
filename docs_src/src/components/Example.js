import React from 'react';
import Button from './Button';
import Badge from './Badge';
import Navigation from './Navigation';
import NavigationLeft from './NavigationLeft';
import NavigationRight from './NavigationRight';
import NavigationItem from './NavigationItem';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import Tab from './Tab';
import TabItem from './TabItem';
import Message from './Message';
import MessageBody from './MessageBody';

const Example = () => (
  <div className="p-example">
    <Navigation>
      <NavigationLeft>
          <NavigationItem>drop</NavigationItem>
      </NavigationLeft>
      <NavigationRight>
          <NavigationItem><Badge color="primary">1</Badge></NavigationItem>
      </NavigationRight>
    </Navigation>
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem active>Blog</BreadcrumbItem>
    </Breadcrumb>
    <div className="p-alert">
      <Message color="secondary">
        <MessageBody>important notices</MessageBody>
      </Message>
    </div>
    <div className="p-list">
      <Tab>
        <TabItem>published</TabItem>
        <TabItem>draft</TabItem>
        <TabItem active>all</TabItem>
      </Tab>
      <table>
        <thead>
          <tr>
            <th className="p-list__data--small">
              <input type="checkbox" />
            </th>
            <th>Title</th>
            <th></th>
            <th>author</th>
            <th>tags</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"/>
            </td>
            <td>Bule Monday</td>
            <td>
              <Button className="p-button-edit" size="small">edit</Button>
            </td>
            <td>yudppp</td>
            <td>
              <Badge>blue</Badge>
              <Badge>monday</Badge>
            </td>
            <td>2016/08/12 23:00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"/>
            </td>
            <td>Black Friday</td>
            <td>
              <Button className="p-button-edit" size="small">edit</Button>
            </td>
            <td>yudppp</td>
            <td>
              <Badge>black</Badge>
              <Badge>friday</Badge>
            </td>
            <td>2016/08/15 16:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Example;
