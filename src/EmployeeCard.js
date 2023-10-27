import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({ employee, deleteEmployee }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const AnimatedCard = styled(Card)({
    maxWidth: 345,
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });
  const navigate = useNavigate();

  return (
    <AnimatedCard >
      <CardHeader onClick={() => { navigate(`/employee/${employee.id}`) }}
        avatar={
          <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="recipe">
            {employee.id}
          </Avatar>
        }
        title={employee.name}
        subheader={employee.email}
      />
      <CardContent onClick={() => { navigate(`/employee/${employee.id}`) }}>
        <Typography gutterBottom variant="h5" component="div">
          Username : {employee.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone : {employee.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteEmployee(employee.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => { navigate(`/employee/${employee.id}/edit`) }}>Edit</Button>
      </CardActions>
    </AnimatedCard>
  );
};

export default EmployeeCard;
