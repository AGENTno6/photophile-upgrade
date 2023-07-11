import { useContext, useState, React } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return <>
    <Form onSubmit={handleSubmit}
    style={{
      width:300
    }}
    >
      <Label style={{
        fontSize:25,
        display: "flex",
        justifyContent:"center"
      }} >Login</Label>
      <FormGroup>
        <Input
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          bsSize="xl"
          />
      </FormGroup>
      <FormGroup>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          bsSize="xl"
        />
      </FormGroup>
      <Button color="info" style={{
        alignSelf:"center"
        }}>
        Login    
      </Button>
    </Form>
    { !!errorText && <p>{errorText}</p> }
  </>;
}
