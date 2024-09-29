import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

// Container to center the page content vertically and horizontally
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  padding: 20px;
`;

// Reusable PageContainer for all screens
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 500px; /* Increased max-width for a better fit */
  margin: auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center the image */
  align-items: center;     /* Vertically center the image */
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
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
  margin: 10px 0; // Add vertical margin for spacing
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
  justify-content: center;
  width: 100%; // Social buttons span the full width of the form
  margin: 15px 0; // Vertical margin for spacing
`;

const GuestButton = styled(Button)`
  background-color: gray; // Different color to distinguish from other buttons
  margin-top: 15px;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <OuterContainer>
      <PageContainer>
        <ImageContainer>
          <img
            src="Logo.png"
            alt="Welcome"
            style={{ width: "80%", height: "80%", borderRadius: "50%" }} // Centered and consistent size
          />
        </ImageContainer>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" onClick={handleGuestLogin}>Sign In</Button>
        <p style={{ margin: "15px 0" }}>Or continue with</p>
        <SocialMediaButtons>
          <FacebookButton onClick={handleGuestLogin}>
            <img src={"fb_logo.jpeg"} alt="Facebook" /> Facebook
          </FacebookButton>
          <GoogleButton onClick={handleGuestLogin}>
            <img src={"google_logo.jpeg"} alt="Google" /> Google
          </GoogleButton>
        </SocialMediaButtons>
        <GuestButton onClick={handleGuestLogin}>Continue as Guest</GuestButton>
      </PageContainer>
    </OuterContainer>
  );
};

export default LoginPage;
