import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';
import axios from 'axios';
import Loader from './Loader';

const root = {
  minWidth: '300px',
  maxWidth: '500px',
  margin: 'auto',
  marginTop: 20,
  padding: 20,
}

const EmployeeDetailsPage = () => {
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchEmployeeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${employeeId}`);
      setEmployeeData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Grid item xs={12}>
          <p>{error}</p>
        </Grid>
      )}
      {employeeData &&
        <Card style={root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: '20px' }}>
              Employee Details
            </Typography>
            <Typography variant="h5" component="h2" sx={{ marginBottom: '15px' }}>
              {employeeData.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Username: {employeeData.username}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Email: {employeeData.email}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Phone: {employeeData.phone}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Website: {employeeData.website}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Address: {employeeData.address.street}, {employeeData.address.suite}, {employeeData.address.city}, {employeeData.address.zipcode}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Company: {employeeData.company.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '8px' }}>
              Catch Phrase: {employeeData.company.catchPhrase}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Business: {employeeData.company.bs}
            </Typography>
          </CardContent>
        </Card>}
    </>
  );
};

export default EmployeeDetailsPage;
