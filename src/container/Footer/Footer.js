import React from "react";
import { Container, List, Divider, Image } from "semantic-ui-react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      
        <Container textAlign="center" className="footer__container">
          
          <Image
            centered
            size="mini"
            src="https://img.icons8.com/doodle/96/000000/user-male-circle.png"
            alt="userPic"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Mini Project
            </List.Item>
            <List.Item as="a" href="#">
              Date
            </List.Item>
            <List.Item as="a" href="">
              <Link to="/contact">
              Team
              </Link>
            </List.Item>
          </List>
        </Container>
     
    </div>
  );
}

export default Footer;
