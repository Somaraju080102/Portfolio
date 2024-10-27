import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function ProfileSummary() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#161513', // Dark background for contrast
        padding: '20px', 
        borderRadius: '8px', // Rounded corners
        maxWidth: '600px', // Restrict max width for better readability
        margin: '0 auto', // Center align the box
      }}
    >
      <Typography 
        variant="h6" 
        component="p" 
        sx={{ color: 'white', marginBottom: '10px', textAlign:'center' }}
      >
        Full-Stack Developer
      </Typography>

      <Typography 
        variant="body1" 
        component="p" 
        sx={{ color: 'white', lineHeight: 1.8 }}
      >
        I craft seamless web applications using <strong>React</strong> and <strong>Spring Boot</strong>, 
        powered by the reliability of <strong>PostgreSQL</strong>. I enjoy turning complex ideas 
        into functional solutions, driven by a passion for coding and problem-solving.
      </Typography>

      <Typography 
        variant="body1" 
        component="p" 
        sx={{ color: 'white', lineHeight: 1.8, marginTop: '10px' }}
      >
      </Typography>
    </Box>
  );
}
