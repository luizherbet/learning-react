import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text className="text-muted">
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </Form.Text>
      </Form>
    </div>
  );
}

export default UserForm;
