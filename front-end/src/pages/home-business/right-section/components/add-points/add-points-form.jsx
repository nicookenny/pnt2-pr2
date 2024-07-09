import { useState } from 'react';
import { Button } from '../../../../../components/button/button';
import { Input } from '../../../../../components/input/input';
import { addPointsToClient } from '../../../../../services/business.service';
import { useBusiness } from '../../../left-section/hooks/use-business';
import { StyledForm } from '../../styled-components';

export const AddPointsForm = () => {
  const { business } = useBusiness('667c97ec4113c6ee6d77a52d');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);

  const handleSubmit = async (email, points, businessId) => {
    const result = await addPointsToClient(businessId, email, points);
    if (result) {
      alert('Se cargaron: ' + points + ' a ' + email);
      setEmail('');
      setPoints(0);
    }
  };

  return (
    <StyledForm>
      <Input
        type='email'
        name='email'
        label='Correo de tu cliente'
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type='number'
        min='0'
        label='Puntos a cargar'
        value={points}
        required
        onChange={(event) => setPoints(event.target.value)}
      />
      <Button
        type='button'
        onClick={() => {
          handleSubmit(email, points, business.id);
        }}
      >
        Cargar
      </Button>
    </StyledForm>
  );
};
