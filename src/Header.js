import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Header = ({ filterResult }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        filterResult(searchQuery);
    };

    return (
        <AppBar position="static" style={{ padding: ' 10px 5%', backgroundColor: 'primary.dark' }}>
            <Toolbar
                sx={{
                    display: { xs: 'block', sm: 'flex' },
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Employee Dashboard
                </Typography>
                <form onSubmit={handleSearchSubmit}>
                    <TextField
                        id="search"
                        type="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        variant="outlined"
                        style={{ borderRadius: '8px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type="submit">
                                        <SearchIcon />
                                        
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ backgroundColor: 'common.white' }}
                    />
                </form>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
