/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import './Header.css';

const DropdownEl = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a href="#" ref={ref} onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}  ⋁ 
        </a>
      ));
      const CustomMenu = React.forwardRef(
        ({ children, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
          return (
            <div
              ref={ref}
              className={className}
              aria-labelledby={labeledBy}
            >
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );
      
    return ( 
        <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Our services
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey="1">Lorem ipsum</Dropdown.Item>
          <Dropdown.Item eventKey="2">Lorem ipsum</Dropdown.Item>
          <Dropdown.Item eventKey="3">Lorem ipsum</Dropdown.Item>
          <Dropdown.Item eventKey="4">Lorem ipsum</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
        )
}
export default DropdownEl;