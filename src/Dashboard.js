import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Loader from './Loader';
import EditPage from './Edit';
import Header from './Header';

const DashBoard = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchEmployeeData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setEmployeeData(response.data);
            setFilterData(response.data);
            setLoading(false);
        } catch (error) {
            setError("Error fetching data");
            setLoading(false);
        }
    };

    const deleteEmployee = (id) => {
        setFilterData((prevData) => prevData.filter((employee) => employee.id !== id));

    };
    const filterResult = (id) => {
        if (id == '') {
            setError(null);
            setFilterData(employeeData);
            return;
        }
        const res = employeeData.filter(employee => { return employee.id == id });
        console.log(res.length);
        setError(null);
        if (res.length == 0) {
            setError("Invalid Id");
        }
        setFilterData(res);
    }

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    return (
        <>
            <Header filterResult={filterResult} />
            <Grid container spacing={2} sx={{ maxWidth: '90%', margin: 'auto' }}>
                {loading && <Loader />}
                {error && (
                    <Grid item xs={12}>
                        <p>{error}</p>
                    </Grid>
                )}
                {filterData.map((employee) => (
                    <Grid item key={employee.id} xs={12} sm={6} md={4} lg={3}>
                        <EmployeeCard employee={employee} deleteEmployee={deleteEmployee} />
                    </Grid>
                ))}
            </Grid></>
    );
};

export default DashBoard;
