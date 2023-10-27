import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Loader from './Loader';
import axios from 'axios';

const EditPage = ({ employee }) => {
    let { employeeId } = useParams();
    const [formData, setFormData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Employee Updated");
    };

    const fetchEmployeeData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${employeeId}`);
            setFormData(response.data);
            setLoading(false);
        } catch (error) {
            setError("Error fetching data");
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchEmployeeData();
    }, []);

    const StyledBox = styled(Box)({
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        margin: '20px auto'
    });

    return (
        <StyledBox>
            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', marginBottom: '20px' }}>
                Updated Employee Details
            </Typography>
            {loading && <Loader />}
            {error && (
                <Grid item xs={12}>
                    <p>{error}</p>
                </Grid>
            )}
            {formData && <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="ID" name="id" value={formData.id} onChange={handleChange} disabled fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Website" name="website" value={formData.website} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div">
                            Address
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Street" name="street" value={formData.address.street} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Suite" name="suite" value={formData.address.suite} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="City" name="city" value={formData.address.city} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Zipcode" name="zipcode" value={formData.address.zipcode} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div">
                            Company
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Company Name" name="companyName" value={formData.company.name} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Catch Phrase" name="catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Business Strategy" name="bs" value={formData.company.bs} onChange={handleChange} fullWidth />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                    Submit
                </Button>
            </form>}

        </StyledBox>
    );
};

export default EditPage;
