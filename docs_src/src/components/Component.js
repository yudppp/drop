import React from 'react';
import Button from './Button';
import Badge from './Badge';
import Navigation from './Navigation';
import NavigationLeft from './NavigationLeft';
import NavigationCenter from './NavigationCenter';
import NavigationRight from './NavigationRight';
import NavigationItem from './NavigationItem';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import Tab from './Tab';
import TabItem from './TabItem';
import Message from './Message';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import MessageClose from './MessageClose';

const Component = () => (
  <div>
    <h2 className="section">1. Button</h2>
    <div className="preview">
      <div className="module">
        <div className="c-grid">
          <div className="c-grid__cell">
            <Button>button</Button>
          </div>
          <div className="c-grid__cell">
            <Button color="primary">primary</Button>
          </div>
          <div className="c-grid__cell">
            <Button color="secondary">secondary</Button>
          </div>
        </div>
        <div className="c-grid">
          <div className="c-grid__cell">
            <Button size="small">button</Button>
          </div>
          <div className="c-grid__cell">
            <Button color="primary" size="small">primary</Button>
          </div>
          <div className="c-grid__cell">
            <Button color="secondary" size="small">secondary</Button>
          </div>
        </div>
      </div>
    </div>
    <h2 className="section">2. Badge</h2>
    <div className="preview">
      <div className="module">
        <div className="c-grid">
          <div className="c-grid__cell">
            <Badge>badge</Badge>
          </div>
          <div className="c-grid__cell">
            <Badge color="primary">primary</Badge>
          </div>
          <div className="c-grid__cell">
            <Badge color="secondary">secondary</Badge>
          </div>
        </div>
      </div>
    </div>
    <h2 className="section">3. Navigation</h2>
    <div className="preview">
      <div className="module">
        <Navigation>
          <NavigationLeft>
              <NavigationItem>left</NavigationItem>
          </NavigationLeft>
          <NavigationCenter>
              <NavigationItem>center</NavigationItem>
          </NavigationCenter>
          <NavigationRight>
              <NavigationItem>right</NavigationItem>
          </NavigationRight>
        </Navigation>
      </div>
    </div>
    <h2 className="section">4. Breadcrumb</h2>
    <div className="preview">
      <div className="module">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Blog</BreadcrumbItem>
          <BreadcrumbItem>Tags</BreadcrumbItem>
          <BreadcrumbItem active>css</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <h2 className="section">5. Tab</h2>
    <div className="preview">
      <div className="module">
        <Tab>
          <TabItem>published</TabItem>
          <TabItem>draft</TabItem>
          <TabItem active>all</TabItem>
        </Tab>
      </div>
    </div>
    <h2 className="section">6. Message</h2>
    <div className="preview">
      <div className="module">
        <Message>
          <MessageBody>message body</MessageBody>
        </Message>
      </div>
      <div className="module">
        <Message>
          <MessageHeader>message
            <MessageClose/>
          </MessageHeader>
          <MessageBody>message body</MessageBody>
        </Message>
      </div>
      <div className="module">
        <Message color="primary">
          <MessageHeader>message</MessageHeader>
          <MessageBody>message primary</MessageBody>
        </Message>
      </div>
      <div className="module">
        <Message color="secondary">
          <MessageHeader>message</MessageHeader>
          <MessageBody>message secondary</MessageBody>
        </Message>
      </div>
    </div>
    <h2 className="section">7. Grid</h2>
    <div className="preview">
      <div className="c-grid grid-o">
        <div className="c-grid__cell--1">
          <div className="inner">cell--1</div>
        </div>
        <div className="c-grid__cell--2">
          <div className="inner">cell--2</div>
        </div>
        <div className="c-grid__cell--3">
          <div className="inner">cell--3</div>
        </div>
        <div className="c-grid__cell--6">
          <div className="inner">cell--6</div>
        </div>
        <div className="c-grid__cell--4">
          <div className="inner">cell--4</div>
        </div>
        <div className="c-grid__cell--8">
          <div className="inner">cell--8</div>
        </div>
        <div className="c-grid__cell--5">
          <div className="inner">cell--5</div>
        </div>
        <div className="c-grid__cell--fill">
          <div className="inner">cell--fill</div>
        </div>
        <div className="c-grid__cell--12">
          <div className="inner">cell--12</div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;