import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid'; // Use Grid for responsiveness

export function ProfileProjects() {

    function handleRecipe() {
        const link = document.createElement('a');
        link.href = 'https://github.com/Somaraju080102/RecipeBrowsingFullStack';
        link.setAttribute('target', '_blank');
        link.click();
    }

    function handleEcommerce() {
        const link = document.createElement('a');
        link.href = 'https://github.com/Somaraju080102/Ecommerce-React';
        link.setAttribute('target', '_blank');
        link.click();
    }

    return (
        <div id='projects'>
            <h3 className='text-danger text-center mt-4'>PROJECTS</h3>

            <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 5, px: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Recipe Management"
                            height="140"
                            image="./UserManagment_bg.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Recipe Management
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Developed a full-stack web application for browsing and managing recipes.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ backgroundColor: 'lightgreen', justifyContent: 'space-between' }}>
                            <Button sx={{ color: 'black' }} onClick={handleRecipe} size="large">
                                GitHub Repository
                            </Button>
                            <GitHubIcon onClick={handleRecipe} />
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="E-Commerce Application"
                            height="120"
                            image="./E-Commerce.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                E-Commerce Application
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Developed an e-commerce app using React components and API integration to load dynamic product data.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ backgroundColor: 'lightgreen', justifyContent: 'space-between' }}>
                            <Button sx={{ color: 'black' }} onClick={handleEcommerce} size="large">
                                GitHub Repository
                            </Button>
                            <GitHubIcon onClick={handleEcommerce} sx={{ marginRight: '5px' }} />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
