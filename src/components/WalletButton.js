import React, {useState, useContext} from "react";
import styled from "styled-components";
import{createUser} from '../api/createUser';
//import { acquireSessionToken } from "../api/aquireSessionToken";
//import  UserContext  from '../context/UserContext';

const StyledButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.3s ease;
    &:hover {
        background: rgb(65, 65, 65);
        color:white;
    }
`;

const ButtonContainer = styled.div`
    position:fixed;
    z-index: 9;
    top: 1rem;
    right: 1rem;
    background-color: white;
    box-shadow: 2px 2px 50px rgb(204, 204, 204);
    border-radius:5px;
    overflow: hidden;
    transition: all 0.5s ease;
    opacity: 1;
    @media screen and (max-width: 768px) {
        top: 0.5rem;
        right: 0.5rem;
    }
   
`;

const WalletButton = () => {
    const [isCreating, setIsCreating] = useState(false);
    //const { setUserId } = useContext(UserContext);
     const handleCreateWallet = async () => {
        setIsCreating(true);
        try {
            const result = await createUser();
            if (result) {
                console.log('User created successfully. User ID: ', result.userId);
                //setUserId(result.userId)
            } else {
                console.error('Failed to create user');
            }
        } catch (error) {
            console.error('Error in creation process', error);
        } finally {
            setIsCreating(false);
        }
     };
return (
    <ButtonContainer>
        <StyledButton onClick={handleCreateWallet} disabled={isCreating}>
        {isCreating ? 'Creating ...' : 'Create Wallet'}
        </StyledButton>
    </ButtonContainer>
)}
export default WalletButton;