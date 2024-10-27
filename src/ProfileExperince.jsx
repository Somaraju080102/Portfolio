import * as React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work'; // Replace this with company-specific icons

export function ProfileExperince() {
    return (
        <div id='experience'>
            <h3 className="text-center text-primary mt-4">EXPERIENCE</h3>

            <Card sx={{ width: { xs: '90%', sm: '70%', md: '900px' }, margin: 'auto', backgroundColor: '#161513', borderRadius: 2, padding: '16px' }} elevation={4}>
                <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                                <img src="./TechMlogo.png" alt="Spring" style={{backgroundColor:'white', width: '60px', height: '40px', marginRight:'3px'}} /> 

                        <Box flexGrow={1}>
                            <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
                                Associate Software Engineer{' '}
                                <span style={{ fontWeight: 'normal', color: 'lightgray' }}>at TechMahindra</span>
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{ color: 'lightgray', textAlign: 'right' }}>
                                September 2023 - Present
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'white', mt: 2 }}>
                    Assigned to the Cloud and Infrastructure Services unit, working as a Unix Administrator. Responsibilities include managing patching, maintaining physical servers, and ensuring system availability. Involved in handling critical infrastructure components to support enterprise systems.

                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
