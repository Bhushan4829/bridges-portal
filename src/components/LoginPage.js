import React from "react";
import styled from "styled-components";
//import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
//import fbLogo from '../fb_logo.jpeg'; // Adjust the path as needed
//import googleLogo from 'google_logo.jpeg'; // Adjust the path as needed


const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px; // Adjust width as needed
  align-items: center; // Ensure everything in the form is centered
`;

const ImageContainer = styled.div`
  width: 120%; // Adjust size as needed
  margin-bottom: 20px; // Provide spacing between the image and the input fields
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 100%; // Inputs take full width of the form
`;

const Button = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%; // Button takes full width of the form
`;
const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF; // Set a neutral background color
  color: black; // Adjust text color as needed
  img {
    height: 20px; // Adjust based on your button size
    width: auto;
    margin-right: 8px; // Space between the image and the text
  }
`;

const FacebookButton = styled(SocialButton)`
  background-color: #3b5998; // Facebook's brand color
  &:hover {
    background-color: #333399; // A darker shade for hover effect
  }
`;

const GoogleButton = styled(SocialButton)`
  background-color: #db4437; // Google's brand color
  &:hover {
    background-color: #c23321; // A darker shade for hover effect
  }
  margin-left: 10px; // Adds space between Facebook and Google buttons
`;

const SocialMediaButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 130%; // Social buttons span the full width of the form
`;

const GuestButton = styled(Button)`
  background-color: gray; // Different color to distinguish from other buttons
`;


const LoginPage = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <ImageContainer>
          <img
            src="Logo.png"
            alt="Welcome"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageContainer>
        <h2>Login</h2>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" onClick={handleGuestLogin}>Sign In</Button>
        <p>Or continue with</p>
        <SocialMediaButtons>
          <FacebookButton onClick={handleGuestLogin}>
            <img src={"fb_logo.jpeg"} alt="Facebook" /> Facebook
          </FacebookButton>
          <GoogleButton onClick={handleGuestLogin}>
            <img src={"google_logo.jpeg"}  alt="Google" /> Google
          </GoogleButton>
        </SocialMediaButtons>
        <GuestButton onClick={handleGuestLogin}>Continue as Guest</GuestButton>
      </LoginForm>
    </LoginWrapper>
  );
};


export default LoginPage;
