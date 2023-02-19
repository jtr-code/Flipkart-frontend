import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 50%;
`;

const GroupedBtn = () => {
  return (
    <Component>
      <StyledBtn>-</StyledBtn>
      <Button disabled>1</Button>
      <StyledBtn>+</StyledBtn>
    </Component>
  );
};

export default GroupedBtn;
